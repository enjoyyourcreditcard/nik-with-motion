import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import ReactLenis from 'lenis/react';

function Beranda(props) {
    const ref = useRef(null);
    const [produk, setProduk] = useState(JSON.parse(props.produk));
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest);
    });

    const increasingOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const zIndexing = useTransform(scrollYProgress, [0, 0.25], [0, 30]);
    const translating = useTransform(scrollYProgress, [0, 1], [`-100%`, `0%`]);
    const scaling = useTransform(scrollYProgress, [0, 1], [1000, 3]);

    const satelliteStationParentStyle = {
        opacity: increasingOpacity,
        translateY: translating,
        zIndex: zIndexing
    };

    const satelliteStationChildStyle = {
        scale: scaling
    };

    return (
        <>
            <ReactLenis root />
            {/*
              *
                HEADER
              *
              */}
            <section>
                <header className='flex flex-col justify-center items-center h-screen sticky z-20 top-0 right-0 left-0'>
                    <div className="flex flex-col justify-center items-center gap-6 w-5/6">
                        <div className='w-full flex justify-center md:justify-start items-center gap-3 text-sky-400 text-xl md:text-2xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 16 16"><path fill="currentColor" d="M0 7h16v1H0z"/></svg>
                            Lorem ipsum dolor sit amet consectetur
                        </div>
                        <div className="w-full text-center md:text-start text-white text-4xl md:text-6xl font-bold">PENYEDIA PERANGKAT <br /> TELEKOMUNIKASI SATELIT DAN <br /> NAVIGASI LAUT</div>
                        <div>
                            <div className="w-full md:w-4/6 text-center md:text-start text-white text-xl md:text-2xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto, praesentium dolorem officiis labore fugiat exercitationem itaque pariatur cupiditate veritatis ratione. Velit est eos sint rem praesentium consequuntur labore in.</div>
                        </div>
                        <div className="w-full flex items-center justify-center md:justify-start gap-6">
                            <button className="button white-inner-shadow danger text-xl md:text-2xl rounded px-8 py-2 text-white">Lorem, ipsum.</button>
                            <button className="button white-inner-shadow info text-xl md:text-2xl rounded px-8 py-2 text-white">Lorem, ipsum.</button>
                        </div>
                    </div>
                </header>
                <motion.div className="flex flex-col justify-center items-center h-screen overflow-hidden sticky top-0 right-0 left-0" style={ satelliteStationParentStyle } ref={ ref }>
                    <motion.svg className="w-full solid-shadow" height="48" xmlns="http://www.w3.org/2000/svg" style={ satelliteStationChildStyle }>
                        <rect x="0" y="0" width="100%" height="48" fill={ `#1a3150` } mask="url(#mask1)" />
                        <mask id="mask1">
                            <rect x="0" y="0" width="100%" height="48" fill="white" />
                            <text x="50%" y="50%" fill="#000" textAnchor="middle" dominantBaseline="middle" className="font-bold text-center">SATELLITE STATION</text>
                        </mask>
                    </motion.svg>
                </motion.div>
            </section>
            {/*
              *
                ABOUT US
              *
              */}
            <motion.section
                className='flex flex-col items-center justify-start relative z-40'
                transition={{
                    duration: 1,
                }}
                initial={{
                    translateY: `0vh`,
                    opacity: 0
                }}
                whileInView={{
                    translateY: `-40vh`,
                    opacity: 1
                }}
            >
                <div className='w-5/6 flex flex-col gap-9'>
                    <div className='text-white text-center font-bold text-2xl md:text-3xl'>SIAPA KAMI?</div>
                    <div className='text-white text-center font-light text-lg md:text-2xl'>Perusahaan kami berpengalaman menyediakan solusi dan perangkat dibidang telekomunikasi satelit dan navigasi laut dengan membawa beberapa merek ternama. Sebagai distributor resmi dari Thuraya, KODEN, dan beberapa brand lainnya, kami memastikan bahwa setiap produk yang kami jual adalah produk asli dan berkualitas tinggi...</div>
                    <a href='#' className='text-red-500 text-center font-light text-xl md:text-2xl'>{ `SELENGKAPNYA >>` }</a>
                    <div className='grid grid-cols-10 grid-rows-1 md:grid-rows-1 lg:grid-rows-2 gap-6 min-h-96'>
                        <motion.div
                            className="col-span-10 md:col-span-10 lg:col-span-4 row-span-1 md:row-span-1 lg:row-span-2"
                            transition={{
                                duration: 1,
                            }}
                            initial={{
                                translateY: `50%`,
                            }}
                            whileInView={{
                                translateY: `0%`,
                            }}
                        >
                            <button className='w-full h-full relative button white-inner-shadow bg-[#1C4172] rounded-lg min-h-48 p-6'>
                                <div className='panah w-14 md:w-24 aspect-square rotate-180 absolute top-4 right-4' />
                                <span className='text-sky-400 font-bold md:text-4xl absolute top-4 -left-4 md:-left-16 md:w-1/3 md:text-right'>VISI SATELLITE STATION</span>
                                <div className='text-white font-light text-lg text-justify'>Menjadi pemimpin terkemuka dalam layanan konektivitas satelit dan alat navigasi kapal, menjadi pilihan utama pelanggan untuk solusi komunikasi dan navigasi yang handal dan inovatif di Indonesia.</div>
                            </button>
                        </motion.div>
                        <motion.div
                            className="col-span-10 md:col-span-10 lg:col-span-2 row-span-1"
                            transition={{
                                duration: 1,
                            }}
                            initial={{
                                translateY: `50%`,
                            }}
                            whileInView={{
                                translateY: `0%`,
                            }}
                        >
                            <button className='w-full h-full relative button white-inner-shadow bg-[#1C4172] rounded-lg min-h-20 p-6'>
                                <div className='panah w-12 md:w-16 aspect-square absolute top-4 left-4' />
                                <div className='md:w-1/2 md:text-2xl text-right text-white font-bold ml-auto'>GOOD SOLUTION</div>
                            </button>
                        </motion.div>
                        <motion.div
                            className="col-span-10 md:col-span-10 lg:col-span-2 row-span-1"
                            transition={{
                                duration: 1,
                            }}
                            initial={{
                                translateY: `50%`,
                            }}
                            whileInView={{
                                translateY: `0%`,
                            }}
                        >
                            <button className='w-full h-full relative button white-inner-shadow bg-[#1C4172] text-white font-bold rounded-lg min-h-20 p-6'>
                                <div className='panah w-12 md:w-16 aspect-square absolute top-4 left-4' />
                                <div className='md:w-1/2 md:text-2xl text-right text-white font-bold ml-auto'>CUSTOMER FIRST</div>
                            </button>
                        </motion.div>
                        <motion.div
                            className="col-span-10 md:col-span-10 lg:col-span-2 row-span-1"
                            transition={{
                                duration: 1,
                            }}
                            initial={{
                                translateY: `50%`,
                            }}
                            whileInView={{
                                translateY: `0%`,
                            }}
                        >
                            <button className='w-full h-full relative button rounded-lg min-h-20 p-6'>
                                <div className='panah w-14 md:w-24 aspect-square absolute bottom-4 right-4' />
                                <span className='text-sky-400 font-bold md:text-4xl text-left absolute top-4 -left-4'>MISI SATELLITE STATION</span>
                            </button>
                        </motion.div>
                        <motion.div
                            className="col-span-10 md:col-span-10 lg:col-span-2 row-span-1"
                            transition={{
                                duration: 1,
                            }}
                            initial={{
                                translateY: `50%`,
                            }}
                            whileInView={{
                                translateY: `0%`,
                            }}
                        >
                            <button className='w-full h-full relative button white-inner-shadow bg-[#1C4172] text-white font-bold rounded-lg min-h-20 p-6'>
                                <div className='panah w-12 md:w-16 aspect-square absolute top-4 left-4' />
                                <div className='md:w-1/2 md:text-2xl text-right text-white font-bold ml-auto'>SUSTAINABLE DEVELOPMENT</div>
                            </button>
                        </motion.div>
                        <motion.div
                            className="col-span-10 md:col-span-10 lg:col-span-2 row-span-1"
                            transition={{
                                duration: 1,
                            }}
                            initial={{
                                translateY: `50%`,
                            }}
                            whileInView={{
                                translateY: `0%`,
                            }}
                        >
                            <button className='w-full h-full relative button white-inner-shadow bg-[#1C4172] text-white font-bold rounded-lg min-h-20 p-6'>
                                <div className='panah w-12 md:w-16 aspect-square absolute top-4 left-4' />
                                <div className='md:w-1/2 md:text-2xl text-right text-white font-bold ml-auto'>LOCAL MASRKET LEADER</div>
                            </button>
                        </motion.div>
                        <motion.div
                            className="col-span-10 md:col-span-10 lg:col-span-2 row-span-1"
                            transition={{
                                duration: 1,
                            }}
                            initial={{
                                translateY: `50%`,
                            }}
                            whileInView={{
                                translateY: `0%`,
                            }}
                        >
                            <button className='w-full h-full relative button white-inner-shadow bg-[#1C4172] text-white font-bold rounded-lg min-h-20 p-6'>
                                <div className='panah w-12 md:w-16 aspect-square absolute top-4 left-4' />
                                <div className='md:w-1/2 md:text-2xl text-right text-white font-bold ml-auto'>PARTNERSHIP</div>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            {/*
              *
                OUR SERVICES
              *
              */}
            <motion.section
                className='mt-36'
                transition={{
                    duration: 1,
                }}
                initial={{
                    translateY: `0vh`,
                    opacity: 0
                }}
                whileInView={{
                    translateY: `-40vh`,
                    opacity: 1
                }}
            >
                <div className='text-sky-400 text-center font-bold text-2xl md:text-3xl'>LAYANAN KAMI</div>
                <div className="grid md:grid-cols-2 gap-9 mt-9 w-5/6 mx-auto">
                    <motion.div
                        className="col-span-2 md:col-span-1"
                        transition={{
                            duration: 1,
                            delay: 0
                        }}
                        initial={{
                            translateY: `50%`,
                        }}
                        whileInView={{
                            translateY: `0%`,
                        }}
                    >
                        <div className='rounded-xl our-services-gradient relative'>
                            <img className='object-cover object-center' src={ props.imageKapal } alt="layanan-kami" width={ `100%` } />
                        </div>
                        <div className='flex justify-start items-center gap-3 text-sky-400 text-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M0 7h16v1H0z"/></svg>
                            Navigasi & Radio
                        </div>
                        <div className='text-white text-2xl text-center md:text-left md:text-4xl mt-4'>PENYEDIA ALAT NAVIGASI MARITIM</div>
                        <div className='text-white text-center md:text-left md:text-xl font-light mt-4 md:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia expedita voluptates delectus incidunt aliquam, saepe perspiciatis reprehenderit est quidem tempora.</div>
                    </motion.div>
                    <motion.div
                        className="col-span-2 md:col-span-1"
                        transition={{
                            duration: 1,
                            delay: 0.1
                        }}
                        initial={{
                            translateY: `50%`,
                        }}
                        whileInView={{
                            translateY: `0%`,
                        }}
                    >
                        <div className='rounded-xl bottom-gradient relative'>
                            <img className='object-cover object-center' src={ props.imageAntena } alt="layanan-kami" width={ `100%` } />
                        </div>
                        <div className='flex justify-start items-center gap-3 text-sky-400 text-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M0 7h16v1H0z"/></svg>
                            Internet Satelit & Telepon Satelit
                        </div>
                        <div className='text-white text-2xl text-center md:text-left md:text-4xl mt-4'>PENYEDIA LAYANAN KOMUNIKASI SATELIT DAN RADIO DI INDONESIA</div>
                        <div className='text-white text-center md:text-left md:text-xl font-light mt-4 md:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia expedita voluptates delectus incidunt aliquam.</div>
                    </motion.div>
                </div>
            </motion.section>
            {/*
              *
                PRODUCTS
              *
              */}
            <motion.section
                className='mt-36'
                transition={{
                    duration: 1,
                }}
                initial={{
                    translateY: `0vh`,
                    opacity: 0
                }}
                whileInView={{
                    translateY: `-40vh`,
                    opacity: 1
                }}
            >
                <div className='product-banner h-[80vh] flex flex-col justify-center items-center'>
                    <div className="flex flex-col justify-center items-center md:items-start gap-6 w-5/6">
                        <div className="w-full text-center md:text-start text-white text-4xl md:text-8xl font-bold">STARLINK</div>
                        <div className="w-full md:w-4/6 text-center md:text-start text-white text-xl md:text-2xl font-light">Produk terbaru dari STARLINK tersedia di kami</div>
                        <div className="w-full flex items-center justify-center md:justify-start gap-6">
                            <button className="button white-inner-shadow danger text-xl md:text-2xl rounded px-8 py-2 text-white">Pelajari</button>
                            <button className="button white-inner-shadow info text-xl md:text-2xl rounded px-8 py-2 text-white">Beli</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-9 mt-9">
                    {
                        produk.map((item, index) =>
                            !index % 2
                            ?
                            <div className="col-span-2 md:col-span-1" key={ item.id }>
                                <div className='bg-[#1C4172] white-inner-shadow py-12 flex flex-col justify-center items-center'>
                                    <div className='w-full bottom-gradient relative'>
                                        <img className='w-1/4 mx-auto aspect-square' src={ item.asset_gambar_produk } alt="product" />
                                    </div>
                                    <div className='flex flex-col items-center justify-center gap-3'>
                                        <div className='text-white text-4xl font-bold'>{ item.nama + ' ' + index }</div>
                                        <div className='text-white text-xl font-light'>{ item.kategori_produk.kategori }</div>
                                    </div>
                                    <div className="flex items-center justify-center gap-6 mt-3">
                                        <button className="button bg-blue-500 rounded-full text-xl md:text-2xl px-8 py-2 text-white">Pelajari</button>
                                        <button className="button border border-white rounded-full text-xl md:text-2xl px-8 py-2 text-white">Beli</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="col-span-2 md:col-span-1" key={ item.id }>
                                <div className='bg-sky-200 white-inner-shadow py-12 flex flex-col justify-center items-center'>
                                    <div className='w-full bottom-gradient relative'>
                                        <img className='w-1/4 mx-auto aspect-square' src={ item.asset_gambar_produk } alt="product" />
                                    </div>
                                    <div className='flex flex-col items-center justify-center gap-3'>
                                        <div className='text-slate-900 text-4xl font-bold'>{ item.nama + ' ' + index }</div>
                                        <div className='text-slate-900 text-xl font-light'>{ item.kategori_produk.kategori }</div>
                                    </div>
                                    <div className="flex items-center justify-center gap-6 mt-3">
                                        <button className="button bg-blue-500 rounded-full text-xl md:text-2xl px-8 py-2 text-white">Pelajari</button>
                                        <button className="button border border-blue-500 rounded-full text-xl md:text-2xl px-8 py-2 text-blue-500">Beli</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='mt-36 flex justify-center'>
                    <a className="button border border-white rounded-full text-xl md:text-2xl px-8 py-2 text-white" href='#'>{ `Selengkapnya >>` }</a>
                </div>
            </motion.section>
        </>
    );
}

export default Beranda;

const bladeElement = document.getElementById("beranda-component");

if (bladeElement) {
    const Index = ReactDOM.createRoot(bladeElement);
    const props = Object.assign({}, bladeElement.dataset);

    Index.render(
        <React.StrictMode>
            <Beranda {...props}/>
        </React.StrictMode>
    )
}
