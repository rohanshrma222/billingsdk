"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";

// Define variants using CVA
const sectionVariants = cva("py-32", {
  variants: {
    size: {
      small: "py-6 md:py-12",
      medium: "py-10 md:py-20", 
      large: "py-16 md:py-32",
    },
    theme: {
      minimal: "",
      classic: "bg-gradient-to-b from-background to-muted/20 relative overflow-hidden",
    },
  },
  defaultVariants: {
    size: "medium",
    theme: "minimal",
  },
});

const titleVariants = cva("text-pretty text-center font-bold", {
  variants: {
    size: {
      small: "text-3xl lg:text-4xl",
      medium: "text-4xl lg:text-5xl",
      large: "text-4xl lg:text-6xl",
    },
    theme: {
      minimal: "",
      classic: "bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent",
    },
  },
  defaultVariants: {
    size: "large",
    theme: "minimal",
  },
});

const descriptionVariants = cva("text-muted-foreground max-w-2xl mx-auto text-center", {
  variants: {
    size: {
      small: "text-base lg:text-lg",
      medium: "text-lg lg:text-xl",
      large: "lg:text-xl",
    },
    theme: {
      minimal: "",
      classic: "",
    },
  },
  defaultVariants: {
    size: "large",
    theme: "minimal",
  },
});

const cardVariants = cva(
  "relative cursor-pointer transition-all duration-200 hover:shadow-lg",
  {
    variants: {
      size: {
        small: "p-4",
        medium: "p-5",
        large: "p-6",
      },
      theme: {
        minimal: "",
        classic: "hover:shadow-xl backdrop-blur-sm bg-card/50 border-border/50",
      },
      selected: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        theme: "minimal",
        selected: true,
        className: "border-indigo-600 shadow-lg ring-2 ring-indigo-600",
      },
      {
        theme: "minimal", 
        selected: false,
        className: "hover:border-muted-foreground",
      },
      {
        theme: "classic",
        selected: true,
        className: "border-primary/50 shadow-xl ring-2 ring-primary/20 bg-gradient-to-b from-primary/5 to-transparent",
      },
      {
        theme: "classic",
        selected: false,
        className: "hover:border-primary/30",
      },
    ],
    defaultVariants: {
      size: "large",
      theme: "minimal",
      selected: false,
    },
  }
);

const buttonVariants = cva(
  "w-full transition-all duration-300",
  {
    variants: {
      theme: {
        minimal: "",
        classic: "relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-xl active:scale-95 border border-primary/20",
      },
      selected: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        theme: "minimal",
        selected: true,
        className: "bg-indigo-600 hover:bg-indigo-700 text-white",
      },
      {
        theme: "minimal",
        selected: false,
        className: "bg-background border border-border text-foreground hover:bg-muted",
      },
      {
        theme: "classic",
        selected: true,
        className: "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white",
      },
      {
        theme: "classic",
        selected: false,
        className: "bg-muted/50 text-muted-foreground hover:bg-muted",
      },
    ],
    defaultVariants: {
      theme: "minimal",
      selected: false,
    },
  }
);

// TypeScript interfaces
export interface PricingTableEightPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  users: number | string;
  popular?: boolean;
}

export interface FeatureItemRecord {
  name: string;
  tooltip?: boolean;
  [planId: string]: boolean | string | undefined;
}

export interface FeatureCategory {
  category: string;
  items: FeatureItemRecord[];
}

export interface PricingTableEightProps extends VariantProps<typeof sectionVariants> {
  plans: PricingTableEightPlan[];
  features: FeatureCategory[];
  title?: string;
  description?: string;
  onPlanSelect?: (planId: string) => void;
  className?: string;
}

export function PricingTableEight({ 
  className,
  plans,
  features,
  title = "Choose a plan that's right for you",
  description = "We believe Untitled should be accessible to all companies, no matter the size of your startup.",
  onPlanSelect,
  size,
  theme = "minimal"
}: PricingTableEightProps) {
  const [selectedPlan, setSelectedPlan] = useState(plans.find(p => p.popular)?.id || plans[0]?.id || "");

  const currentPlan = plans.find((plan) => plan.id === selectedPlan) || plans[0];
  const sliderValue = [typeof currentPlan?.users === "string" ? 25 : (currentPlan?.users || 1)];

  const renderFeatureValue = (value: boolean | string | undefined) => {
    if (typeof value === "boolean") {
      return value ? <Check className="h-5 w-5 text-indigo-600" /> : <span className="text-muted-foreground">—</span>;
    }
    if (typeof value === "string") {
      return <span className="text-sm text-foreground">{value}</span>;
    }
    return <span className="text-muted-foreground">—</span>;
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    onPlanSelect?.(planId);
  };

  return (
    <section className={cn(sectionVariants({ size, theme }), className)}>
      {/* Classic theme background elements */}
      {theme === "classic" && (
        <>
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-600/5 rounded-full blur-2xl" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className={cn(titleVariants({ size, theme }))}>
            {title}
          </h1>
          <p className={cn(descriptionVariants({ size, theme }), "mt-6")}>
            {description}
          </p>
        </div>

        {/* User Slider */}
        <div className="mx-auto mt-12 max-w-md px-4">
          <div className="relative">
            <Slider value={sliderValue} max={25} min={1} step={1} className="w-full" disabled />
            <div className="mt-2 text-center">
              <span className="text-sm font-medium text-foreground">{currentPlan?.users} users</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={cn(
                    cardVariants({ 
                      size, 
                      theme, 
                      selected: selectedPlan === plan.id 
                    })
                  )}
                  onClick={() => handlePlanSelect(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <Badge className={cn(
                        "px-4 py-1 text-sm font-medium rounded-md shadow-sm",
                        theme === "classic" 
                          ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-indigo-600/20"
                          : "bg-indigo-600 hover:bg-indigo-700 text-white"
                      )}>
                        Most popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg font-semibold">{plan.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className={cn(
                        "text-4xl font-bold",
                        theme === "classic" 
                          ? "bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
                          : "text-foreground"
                      )}>
                        ${plan.price}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className={cn(
                        buttonVariants({ theme, selected: selectedPlan === plan.id })
                      )}
                    >
                      Get started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="overflow-x-auto overflow-hidden rounded-lg border bg-card">
            <AnimatePresence mode="wait">
              {features.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
                >
                  {categoryIndex > 0 && <div className="border-t" />}

                  {/* Category Header */}
                  <div className="bg-muted/50 px-4 sm:px-6 py-4">
                    <h3 className="text-sm font-semibold text-foreground">{category.category}</h3>
                  </div>

                  {/* Feature Rows */}
                  {category.items.map((feature, featureIndex) => (
                    <div
                      key={feature.name}
                      className={cn(
                        "px-4 sm:px-6 py-4",
                        featureIndex > 0 && "border-t border-border/50",
                      )}
                    >
                      {/* Mobile Layout */}
                      <div className="block sm:hidden">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-sm text-foreground font-medium">{feature.name}</span>
                          {feature.tooltip && <Info className="h-4 w-4 text-muted-foreground" />}
                        </div>
                        <div className="space-y-2">
                          {plans.map((plan) => (
                            <div key={plan.id} className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">{plan.name}</span>
                              <div className="flex items-center">
                                {renderFeatureValue(feature[plan.id])}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Desktop Layout - Match pricing cards grid */}
                      <div className="hidden sm:grid sm:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))] lg:grid-cols-4 gap-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-foreground font-medium">{feature.name}</span>
                          {feature.tooltip && <Info className="h-4 w-4 text-muted-foreground" />}
                        </div>
                        {plans.map((plan) => (
                          <div key={plan.id} className="flex items-center justify-center">
                            {renderFeatureValue(feature[plan.id])}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom CTA Buttons */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <Button
                key={plan.id}
                className={cn(
                  buttonVariants({ theme, selected: selectedPlan === plan.id })
                )}
                onClick={() => handlePlanSelect(plan.id)}
              >
                Get started
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
