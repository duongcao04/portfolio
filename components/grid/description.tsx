import profile from '@/public/images/profile.jpg';
import Image from 'next/image';
import Card from '../card';

export default function Description() {
    return (
        <Card>
            <div className='flex h-full flex-col justify-center gap-4 p-6 md:px-10 md:py-6'>
                <div className='relative size-14 overflow-hidden rounded-full sm:size-16'>
                    <Image
                        src={profile}
                        alt='Maulana Ahmad Aji Triadi'
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        placeholder='blur'
                        priority
                    />
                </div>
                <p className='leading-relaxed'>
                    I&apos;m{' '}
                    <span className='text-xl font-semibold'>Maulana</span>, a
                    web developer from Yogyakarta, Indonesia. I&apos;m
                    interested in Laravel, Node, Go, and React.
                </p>
            </div>
        </Card>
    );
}