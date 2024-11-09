import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Hitesh Bandhu - AI Engineer & Consultant';
export const size = {
  width: 1200,
  height: 675, // Twitter card aspect ratio
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
          backgroundColor: '#15202B', // Twitter dark theme color
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #1DA1F2 1%, transparent 0%), radial-gradient(circle at 75px 75px, #1DA1F2 1%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #1DA1F2',
            backgroundColor: 'rgba(21, 32, 43, 0.9)',
            padding: '40px 60px',
            borderRadius: '16px',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: 'linear-gradient(to bottom right, #1DA1F2 20%, #0D8BD9)',
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
              fontSize: 32,
              color: '#E7E9EA', // Twitter text color
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
