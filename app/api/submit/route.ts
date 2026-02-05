import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('🔍 SERVER: Received data from client:', JSON.stringify(data, null, 2));

    // Prepare data for webhook with exact keys for database structure
    const webhookData = {
      clientName: data.clientName || '',
      email: data.email || '',
      phone: data.phone || '', // Empty string if not provided
      serviceAddress: data.serviceAddress || '',
      moveInDate: data.moveInDate || '',
      services: Object.entries(data.services || {})
        .filter(([_, value]) => value)
        .map(([key]) => {
          // Format service names properly
          if (key === 'other') return 'Other / Multiple Admin Tasks';
          return key.charAt(0).toUpperCase() + key.slice(1);
        })
        .join(', ') || 'None selected',
      realtorName: data.realtorName || '',
      text: data.message || '', // CRITICAL: Maps textarea to 'text' for Telegram bot
    };

    // Log final payload for verification
    console.log('🚀 SERVER: Sending to Make.com webhook:', JSON.stringify(webhookData, null, 2));

    // Send to Make.com webhook
    const webhookUrl = 'https://hook.eu1.make.com/ov3hp14un2ry8wcex2dv6vcswe118qyt';
    
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    console.log('📡 SERVER: Webhook response status:', webhookResponse.status, webhookResponse.statusText);

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error('❌ SERVER: Webhook error response:', errorText);
      throw new Error(`Webhook request failed: ${webhookResponse.status}`);
    }

    const webhookResponseData = await webhookResponse.text();
    console.log('✅ SERVER: Webhook success response:', webhookResponseData);

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('❌ SERVER: API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
