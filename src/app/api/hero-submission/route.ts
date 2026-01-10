import { NextResponse } from 'next/server';

const GOOGLE_FORM_ENDPOINT =
  'https://docs.google.com/forms/d/e/1FAIpQLSfj_jQFKFukTLaXl-aIJTLJF6z054NnaDfDf8IFq9x3DpSOfQ/formResponse';

const ENTRY_MAP = {
  name: 'entry.335578936',
  email: 'entry.1970688751',
  mobile: 'entry.1026570122',
  class: 'entry.1041767998',
  subject: 'entry.1503846795',
  batch: 'entry.1273071780',
};

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const formBody = new URLSearchParams();

    formBody.append(ENTRY_MAP.name, payload.name || '');
    formBody.append(ENTRY_MAP.email, payload.email || '');
    formBody.append(ENTRY_MAP.mobile, payload.mobile || '');
    formBody.append(ENTRY_MAP.class, payload.class || '');
    formBody.append(ENTRY_MAP.subject, payload.subject || '');
    formBody.append(ENTRY_MAP.batch, payload.batch || '');

    const response = await fetch(GOOGLE_FORM_ENDPOINT, {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const responseText = await response.text();
    if (!response.ok && response.status !== 200 && response.status !== 302) {
      throw new Error(
        `Google Form rejected the submission (${response.status}): ${responseText}`
      );
    }

    console.log('Google Form response', response.status, responseText);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message || 'Unknown error' },
      { status: 500 }
    );
  }
}
