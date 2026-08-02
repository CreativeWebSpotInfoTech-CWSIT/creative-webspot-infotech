import { motion } from "framer-motion";
import {
  Layers,
  DollarSign,
  Cpu,
  Clock,
  Headphones,
  CheckCircle,
} from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "One-Stop Solution",
    desc: "Software. Hardware. AI. Media. Content. Everything under one roof. No more juggling 5 different vendors.",
  },
  {
    icon: DollarSign,
    title: "Premium Quality, Fair Pricing",
    desc: "We deliver agency-quality work without agency-quality prices. Transparent pricing, no hidden costs.",
  },
  {
    icon: Cpu,
    title: "Latest Technology",
    desc: "We don't use outdated tech. React, AI, automation, cloud-native — we build with 2026's best tools.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    desc: "Time is money. Our streamlined processes ensure your project launches on schedule — every time.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Issues don't wait for business hours. Neither do we. Round-the-clock support keeps operations smooth.",
  },
  {
    icon: CheckCircle,
    title: "Proven Process",
    desc: "Discovery → Design → Develop → Deploy → Support. Our 5-step process minimizes risk and maximizes results.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white dark:bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Why Creative WebSpot?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What makes us different from the rest
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
