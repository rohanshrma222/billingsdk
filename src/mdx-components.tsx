import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import { PreviewComponents } from '@/components/preview/preview-components';
import { CancelSubscriptionCardDemo } from '@/components/cancel-subscription-card-demo';
import { CancelSubscriptionCardTwoDemo } from '@/components/cancel-subscription-card-two-demo';
import { CancelSubscriptionDialogDemo } from '@/components/cancel-subscription-dialog-demo';
import { PricingTableOneDemo } from '@/components/pricing-table-one-demo';
import { PricingTableOneMinimalDemo } from '@/components/pricing-table-one-minimal-demo';
import { PricingTableTwoMinimalDemo } from '@/components/pricing-table-two-minimal-demo';
import { PricingTableTwoDemo } from '@/components/pricing-table-two-demo';
import { PricingTableThreeDemo } from '@/components/pricing-table-three-demo';
import { PricingTableFourDemo } from '@/components/pricing-table-four-demo';
import { SubscriptionManagementDemo } from '@/components/subscription-management-demo';
import { UpdatePlanDialogDemo } from '@/components/update-plan-dialog-demo';
import { UpdatePlanCardDemo } from '@/components/update-plan-card-demo';
import UsageMeterLinearDemo from '@/components/usage-meter-linear-demo';
import UsageMeterCircleDemo from '@/components/usage-meter-circle-demo';
import BannerDemo from '@/components/banner-demo';
import BannerGradientDemo from '@/components/banner-gradient-demo';
import BannerDemoTwo from '@/components/banner-demo-two';
import BannerDemoThree from '@/components/banner-demo-three';
import BannerDestructiveDemo from '@/components/banner-destructive-demo';
import BannerWarningDemo from '@/components/banner-warning-demo';
import BannerSuccessDemo from '@/components/banner-success-demo';
import BannerInfoDemo from '@/components/banner-info-demo';
import BannerAnnouncementDemo from '@/components/banner-announcement-demo';
import CustomUsageMeterCircleDemo from '@/components/custom-usage-meter-circle-demo';
import CustomUsageMeterLinearDemo from '@/components/custom-usage-meter-linear-demo';
import InvoiceHistoryDemo from '@/components/invoice-history-demo';
import UsageTableDemo from '@/components/usage-table-demo';
import { PaymentMethodSelectorDemo } from '@/components/payment-method-selector-demo';
import { PaymentMethodManagerDemo } from '@/components/payment-method-manager-demo';
import { PaymentSuccessDialogDemo } from '@/components/payment-success-dialog-demo';
import { PricingTableFiveDemo } from '@/components/pricing-table-five-demo';
import { PricingTableFiveDemoMinimal } from '@/components/pricing-table-five-minimal-demo';
import { PaymentDetailsDemo } from '@/components/payment-details-demo';
import { ProrationPreviewDemo } from '@/components/proration-preview-demo';
import { CouponDemo } from '@/components/coupon-demo';
import { BillingSummaryCardDemo } from '@/components/billing-summary-card-demo';
import { UpcomingChargesDemo } from '@/components/upcoming-charges-demo';
import { BillingSettings2Demo } from '@/components/billing-settings-2-demo';
import { PricingTableSixDemo } from '@/components/pricing-table-six-demo';
import { UsageBasedPricingDemo } from '@/components/usage-based-pricing-demo';
import { DetailedUsageTableDemo } from '@/components/detailed-usage-table-demo';
import { PricingTableSevenDemo } from '@/components/pricing-table-seven-demo';
import { PricingTableEightDemo } from '@/components/pricing-table-eight-demo';
import {PaymentCardDemo} from '@/components/payment-card-demo';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ...TabsComponents,
    PreviewComponents,
    PricingTableOneDemo,
    PricingTableOneMinimalDemo,
    PricingTableTwoDemo,
    PricingTableTwoMinimalDemo,
    PricingTableThreeDemo,
    PricingTableFourDemo,
    PricingTableFiveDemo,
    PricingTableFiveDemoMinimal,
    CancelSubscriptionCardDemo,
    CancelSubscriptionCardTwoDemo,
    CancelSubscriptionDialogDemo,
    SubscriptionManagementDemo,
    UpdatePlanDialogDemo,
    UpdatePlanCardDemo,
    UsageMeterLinearDemo,
    CustomUsageMeterCircleDemo,
    UsageMeterCircleDemo,
    CustomUsageMeterLinearDemo,
    BannerDemo,
    BannerDemoTwo,
    BannerDemoThree,
    BannerGradientDemo,
    BannerDestructiveDemo,
    BannerWarningDemo,
    BannerSuccessDemo,
    BannerInfoDemo,
    BannerAnnouncementDemo,
    InvoiceHistoryDemo,
    UsageTableDemo,
    PaymentMethodSelectorDemo,
    PaymentMethodManagerDemo,
    PaymentSuccessDialogDemo,
    PaymentDetailsDemo,
    PaymentCardDemo,
    ProrationPreviewDemo,
    CouponDemo,
	  BillingSummaryCardDemo,
    UpcomingChargesDemo,
	  PricingTableSixDemo,
    DetailedUsageTableDemo,
    PricingTableSevenDemo,
    PricingTableEightDemo,
	  BillingSettings2Demo,
    UsageBasedPricingDemo
  };
}