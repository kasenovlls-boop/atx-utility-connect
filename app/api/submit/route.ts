import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Prepare data for webhook - sending all collected information
    const webhookData = {
      clientName: data.clientName,
      email: data.email,
      phone: data.phone,
      serviceAddress: data.serviceAddress,
      moveInDate: data.moveInDate,
      realtorName: data.realtorName || 'N/A',
      services: Object.entries(data.services)
        .filter(([_, value]) => value)
        .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
        .join(', '),
      submittedAt: new Date().toISOString(),
    };

    // Send to Make.com webhook
    const webhookUrl = 'https://hook.eu1.make.com/2fjmt1n9kcqxf3r6lu9wudqmn4i9cxxi';
    
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    if (!webhookResponse.ok) {
      throw new Error('Webhook request failed');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
