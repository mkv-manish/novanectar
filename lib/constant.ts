type Item = {
    id: number;
    className: string;
    title: string;
    image: string;
    description: string[];
};

export const items: Item[] = [
    {
        id: 1,
        className: "order-first md:order-last md:justify-end",
        title: "Company Overview",
        image: "/company-overview.svg",
        description: ["Novanectar Solutions was established in 2024 with a vision to revolutionize the way businesses leverage technology. We specialize in providing innovative tech solutions that drive growth and efficiency. Our mission is to empower organizations across various industries by delivering cutting-edge technology services and products that address their unique challenges and opportunities.", "At Novanectar Solutions, we offer a comprehensive range of services, including software development, IT consulting, cloud computing, cybersecurity, and data analytics. Our team of experienced professionals is dedicated to understanding the specific needs of our clients and crafting tailored solutions that maximize their potential.", "Our approach is centered around three core principles: innovation, reliability, and customer-centricity. We continuously invest in research and development to stay ahead of industry trends and ensure that our clients benefit from the latest advancements in technology. By maintaining a strong commitment to quality and service excellence, we have built long-lasting relationships with our clients, helping them achieve sustainable growth and success."],
    },
    {
        id: 2,
        className: "order-last md:order-first md:justify-start",
        title: "Our Mission",
        image: "/mission.svg",
        description: ["Our mission is to empower businesses of all sizes with cutting-edge technology solutions that solve real-world problems and fuel digital transformation. At Novanectar Solutions, we believe that technology is the key to unlocking a brighter future for organizations across every industry. By providing innovative and reliable tech services, we help businesses streamline their operations, enhance their productivity, and achieve their strategic goals.", "We are committed to understanding the unique challenges faced by each of our clients and tailoring our solutions to meet their specific needs. Whether it’s developing custom software, offering expert IT consulting, implementing robust cloud computing infrastructures, ensuring top-notch cybersecurity, or leveraging data analytics for actionable insights, we strive to deliver excellence in every project we undertake.", "Our approach is driven by three core principles: innovation, reliability, and customer-centricity. We continuously invest in research and development to stay ahead of the technological curve, ensuring that our clients benefit from the latest advancements in the industry. Our solutions are designed to be scalable, adaptable, and future-proof, enabling businesses to stay competitive in an ever-evolving digital landscape."]
    }]
