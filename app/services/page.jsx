"use client";
import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "I craft responsive, fast, and visually engaging websites tailored to meet your needs. Whether you require a sleek portfolio, a robust e-commerce platform, or a dynamic web application, I ensure seamless functionality and an exceptional user experience.",
        href: ""
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: "I craft responsive, fast, and visually engaging websites tailored to meet your needs. Whether you require a sleek portfolio, a robust e-commerce platform, or a dynamic web application, I ensure seamless functionality and an exceptional user experience.",
        href: ""
    },
    {
        num: "03",
        title: "Logo Design",
        description: "I craft responsive, fast, and visually engaging websites tailored to meet your needs. Whether you require a sleek portfolio, a robust e-commerce platform, or a dynamic web application, I ensure seamless functionality and an exceptional user experience.",
        href: ""
    },
    {
        num: "04",
        title: "SEO",
        description: "I craft responsive, fast, and visually engaging websites tailored to meet your needs. Whether you require a sleek portfolio, a robust e-commerce platform, or a dynamic web application, I ensure seamless functionality and an exceptional user experience.",
        href: ""
    },
];

import { motion } from 'framer-motion';

const Services = () => {
    return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">services page</div>
    </section>
    );
};

export default Services;
