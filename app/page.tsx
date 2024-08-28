import React from 'react'; 
import ThreeBackground from '@/components/starCanvas'; 

export default function Home() {
  return (
    <div className="w-full h-screen">
        <div className='w-full h-full absolute top-0 bottom-0'>
          <ThreeBackground />
        </div>
        <h1 className="text-4xl font-bold mt-6">Welcome</h1>
    </div>
  );
}
