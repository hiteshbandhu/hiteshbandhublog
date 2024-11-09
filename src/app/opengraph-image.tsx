import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Hitesh Bandhu - AI Engineer & Consultant';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#030303',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #333',
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: '40px 60px',
            borderRadius: '12px',
          }}
        >
          <h1
            style={{
              fontSize: 60,
              fontWeight: 800,
              background: 'linear-gradient(to bottom right, #fff 20%, #666)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Hitesh Bandhu
          </h1>
          <p
            style={{
              fontSize: 28,
              color: '#888',
              margin: '12px 0 0',
            }}
          >
            AI Engineer & Gen-AI Consultancy
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
