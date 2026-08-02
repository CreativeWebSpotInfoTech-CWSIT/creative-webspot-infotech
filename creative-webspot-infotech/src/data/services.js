import { Code, Monitor, Camera, Video, Brain, PenTool } from 'lucide-react';

export const servicesData = [
    {
        id: 'software',
        title: 'Software Development',
        icon: Code,
        color: 'from-blue-500 to-cyan-400',
        items: ['Custom Web Apps', 'Business Websites', 'ERP Solutions', 'CRM Solutions', 'Desktop Apps']
    },
    {
        id: 'hardware',
        title: 'Hardware Solutions',
        icon: Monitor,
        color: 'from-purple-500 to-pink-400',
        items: ['Computer Sales', 'Laptop Sales', 'Networking', 'CCTV Installation', 'Biometric Systems']
    },
    {
        id: 'photography',
        title: 'Photography',
        icon: Camera,
        color: 'from-orange-500 to-red-400',
        items: ['Corporate', 'Product', 'Event', 'Drone']
    },
    {
        id: 'video',
        title: 'Video Production',
        icon: Video,
        color: 'from-green-500 to-emerald-400',
        items: ['Advertisements', 'Corporate Videos', 'Wedding', 'YouTube Editing', 'Motion Graphics']
    },
    {
        id: 'ai',
        title: 'Artificial Intelligence',
        icon: Brain,
        color: 'from-indigo-500 to-blue-400',
        items: ['AI Chatbots', 'Automation', 'AI Voice Agents', 'Business AI', 'Custom AI Apps']
    },
    {
        id: 'content',
        title: 'Content Writing',
        icon: PenTool,
        color: 'from-yellow-500 to-orange-400',
        items: ['SEO Content', 'Blog Writing', 'Copywriting', 'Website Content', 'Social Media']
    }
];