// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
	matcher: '/',
}

export async function middleware(request: NextRequest) {
	const id = request.cookies.get('perfect-list-id')?.value
	const url = request.nextUrl.clone()

	if (id) {
		url.pathname = '/' + encodeURIComponent(id)
		return NextResponse.redirect(url)
	}

	console.log('creating list')
	const newId = await fetch(`${process.env.SUPABASE_URL}/rest/v1/rpc/createList`, {
		method: 'POST',
		body: JSON.stringify({}),
		headers: {
			'Content-Type': 'application/json',
			apikey: process.env.SUPABASE_KEY!,
			Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
		},
	}).then((res) => res.json())

	url.pathname = '/' + encodeURIComponent(newId)

	const response = NextResponse.redirect(url)

	response.cookies.set({
		name: 'perfect-list-id',
		value: newId,
	})
	request.cookies.set({
		name: 'perfect-list-id',
		value: newId,
	})

	return response
}
