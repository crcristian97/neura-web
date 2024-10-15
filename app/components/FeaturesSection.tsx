import { cn } from "../lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
 
export function FeaturesSection() {
  const features = [
    {
      title: "Custom Web Design",
      description:
        "Tailored websites that perfectly reflect your company's brand and vision.",
      icon: <IconTerminal2 />,
    },
    {
      title: "SEO Optimization",
      description:
        "Built-in SEO features to improve your website's search engine rankings.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Responsive Design",
      description: "Websites that look great on all devices, from desktop to mobile.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "User-Friendly CMS",
      description:
        "Easy-to-use content management system for effortless website updates.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Ongoing Maintenance",
      description: "Regular updates and support to keep your website running smoothly.",
      icon: <IconHeart />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time.",
      icon: <IconHelp />,
    },
    {
      title: "Affordable Packages",
      description:
        "Competitive pricing options to suit businesses of all sizes and budgets.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Advanced AI Solutions",
      description: "Harness the power of Artificial Intelligence to streamline decision-making and automate processes.",
      icon: <IconCloud />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}
 
const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
