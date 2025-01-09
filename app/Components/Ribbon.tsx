import React from 'react';
import Image from 'next/image';

const LogoRibbon = () => {
  return (
    <div className="pt-10 w-full bg-[#140941] overflow-hidden">
      {/* Outer container */}
      <div className="relative flex items-center">
        {/* Inner scrolling container */}
        <div className="animate-scroll flex whitespace-nowrap">
          {/* First set of logos */}
          <div className="flex items-center mx-4">
            <div className="w-32 h-20 relative mx-4">
              <Image
                src="/dbicon.png"
                alt="Partner logo 1"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="w-32 h-20 relative mx-4">
              <Image
                src="/dbicon.png"
                alt="Partner logo 1"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="w-32 h-20 relative mx-4">
              <Image
                src="/dbicon.png"
                alt="Partner logo 1"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="w-32 h-20 relative mx-4">
              <Image
                src="/dbicon.png"
                alt="Partner logo 1"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="w-32 h-20 relative mx-4">
              <Image
                src="/dbicon.png"
                alt="Partner logo 1"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="w-32 h-20 relative mx-8">
              <Image
                src="/dbiconwhite.png"
                alt="Partner logo 2"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="w-32 h-20 relative mx-8">
              <Image
                src="/dbicon.png"
                alt="Partner logo 3"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="w-32 h-20 relative mx-8">
              <Image
                src="/dbiconwhite.png"
                alt="Partner logo 4"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-20 relative mx-8">
              <Image
                src="/dbicon.png"
                alt="Partner logo 5"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-20 relative mx-8">
              <Image
                src="/dbiconwhite.png"
                alt="Partner logo 6"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LogoRibbon;