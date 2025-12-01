import { Globe, Heart, ShieldCheck, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type FeatureCardProps = {
  icon: "shield" | "world" | "van" | "love";
  title: string;
  description: string;
};

const icons = {
  shield: ShieldCheck,
  world: Globe,
  van: Truck,
  love: Heart,
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const IconComponent = icons[icon as keyof typeof icons];

  return (
    <Card className="p-6 gap-4 w-full bg-white border border-primaryColor/15 shadow-none">
      <div className="bg-primaryColor/20 rounded-round size-16 grid place-content-center">
        <IconComponent className="text-primaryColor" size={34} />
      </div>
      <CardHeader className="p-0 gap-0">
        <CardTitle className="text-secondaryColor text-lg font-medium capitalize">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-tertiaryColor font-normal text-base">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
