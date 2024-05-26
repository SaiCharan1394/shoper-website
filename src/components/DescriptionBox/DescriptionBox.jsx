import React from 'react';

const DescriptionBox = () => {
  return (
    <div className='md:my-[30px] md:mx-[170px] sm:mx-[20px]'>
      <div className="flex">
        <div className="flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border border-[#d0d0d0]">
          Description
        </div>
        <div className="flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border border-[#d0d0d0] bg-[#fbfbfb] text-[#555]">
          Reviews (122)
        </div>
      </div>
      <div className="flex flex-col gap-[25px] border border-[#d0d0d0] p-[48px] pb-[70px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          laudantium excepturi dolorum vitae cumque numquam reiciendis., et hic
          voluptas soluta atque ea dolorem temporibus, voluptate recusandae
          dolor consectetur? Sit, numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          laudantium excepturi dolorum vitae cumque numquam reiciendis., et hic
          voluptas soluta atque ea dolorem temporibus, voluptate recusandae
          dolor consectetur? Sit, numquam.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
