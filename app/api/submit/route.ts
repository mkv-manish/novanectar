import { NextRequest, NextResponse } from 'next/server';
import Form, { IForm } from '@/lib/models/Form';
import dbConnect from '@/lib/mongodb';

export async function POST(req: NextRequest) {
    await dbConnect();

    try {
        const body = await req.json();
        const form: IForm = await Form.create(body);
        return NextResponse.json({ success: true, data: form }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 400 });
    }
}