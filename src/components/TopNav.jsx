import React from 'react';
import { BiPhoneCall, BiUser } from 'react-icons/bi';
import { PiPencil } from 'react-icons/pi';

const TopNav = () => {
    return (
        <div className='flex justify-between items-center py-4'>
            <div className='flex gap-8'>
                <div className='flex gap-6 items-center justify-between'>
                    <BiPhoneCall></BiPhoneCall>
                    <p>013-1110-7482</p>
                </div>
                <div className='flex gap-6 items-center justify-between'>
                    <PiPencil></PiPencil>
                    <p>BRODIT@EXAMPLE.COM</p>
                </div>
            </div>
            <div className='flex gap-6 items-center justify-between'>
                <BiUser></BiUser>
                <button className=''>LOG IN / SIGN UP</button>
            </div>

        </div>
    );
};

export default TopNav;