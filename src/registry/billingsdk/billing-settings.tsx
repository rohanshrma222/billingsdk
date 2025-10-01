"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, CreditCard, Plus } from "lucide-react"

const tabs = [
  { id: "general", label: "General" },
  { id: "payment", label: "Payment" },
  { id: "invoices", label: "Invoices" },
  { id: "limits", label: "Limits" },
]

function SettingItem({ title, description, checked, onCheckedChange }: any) {
  return (
    <div className="flex items-start sm:items-center justify-between py-3 sm:py-4 gap-3 sm:gap-4 w-full">
      <div className="space-y-0.5 sm:space-y-1 flex-1 min-w-0 pr-2">
        <h3 className="font-medium text-sm sm:text-base text-foreground leading-tight">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{description}</p>
      </div>
      <Switch checked={checked} onCheckedChange={onCheckedChange} className="flex-shrink-0 mt-0.5 sm:mt-0" />
    </div>
  )
}

function TabNavigation({ activeTab, onTabChange }: any) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 rounded-lg bg-muted p-1.5 w-full">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`sm:flex-1 whitespace-nowrap text-center rounded-md px-4 py-2 sm:py-1.5 text-sm font-medium transition-colors cursor-pointer ${
            activeTab === tab.id
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-background/50"
          }`}
        >
          {tab.label}
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export function BillingSettings({
  activeTab,
  onTabChange,
  emailNotifications,
  onEmailNotificationsChange,
  usageAlerts,
  onUsageAlertsChange,
  invoiceReminders,
  onInvoiceRemindersChange,
  cards,
  onAddCard,
  invoiceFormat,
  onInvoiceFormatChange,
  onEditBillingAddress,
  overageProtection,
  onOverageProtectionChange,
  usageLimitAlerts,
  onUsageLimitAlertsChange,
  className,
}: any) {
  const renderGeneralContent = () => (
    <div className="space-y-0 divide-y divide-border">
      <SettingItem
        title="Email notifications"
        description="Receive billing updates via email"
        checked={emailNotifications}
        onCheckedChange={onEmailNotificationsChange}
      />
      <SettingItem
        title="Usage alerts"
        description="Get notified when approaching limits"
        checked={usageAlerts}
        onCheckedChange={onUsageAlertsChange}
      />
      <SettingItem
        title="Invoice reminders"
        description="Remind me before auto-renewal"
        checked={invoiceReminders}
        onCheckedChange={onInvoiceRemindersChange}
      />
    </div>
  )

  const renderPaymentContent = () => (
    <div className="space-y-3 sm:space-y-4">
      {cards.map((card: any) => (
        <div
          key={card.id}
          className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border p-3 sm:p-4 gap-2 sm:gap-3"
        >
          <div className="flex items-center space-x-3 min-w-0 flex-1">
            <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <span className="font-mono text-xs sm:text-sm truncate block">•••• •••• •••• {card.last4}</span>
              <p className="text-xs text-muted-foreground truncate mt-0.5">
                {card.brand} • Expires {card.expiry}
              </p>
            </div>
          </div>
          {card.primary && (
            <Badge variant="secondary" className="flex-shrink-0 text-xs self-start sm:self-center w-fit">
              Primary
            </Badge>
          )}
        </div>
      ))}
      <Button variant="outline" className="w-full sm:w-auto bg-transparent" onClick={onAddCard}>
        <Plus className="mr-2 h-4 w-4" />
        Add new card
      </Button>
    </div>
  )

  const renderInvoicesContent = () => (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div className="space-y-0.5 sm:space-y-1 min-w-0 flex-1">
          <h3 className="font-medium text-sm sm:text-base text-foreground">Invoice format</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">Choose PDF or HTML format</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto sm:min-w-24 bg-transparent">
              {invoiceFormat}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[calc(100vw-2rem)] sm:w-auto">
            <DropdownMenuItem onClick={() => onInvoiceFormatChange("PDF")}>PDF</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onInvoiceFormatChange("HTML")}>HTML</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div className="space-y-0.5 sm:space-y-1 min-w-0 flex-1">
          <h3 className="font-medium text-sm sm:text-base text-foreground">Billing address</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">Update your billing address</p>
        </div>
        <Button variant="outline" onClick={onEditBillingAddress} className="w-full sm:w-auto bg-transparent">
          Edit
        </Button>
      </div>
    </div>
  )

  const renderLimitsContent = () => (
    <div className="space-y-0 divide-y divide-border">
      <SettingItem
        title="Overage protection"
        description="Prevent accidental overages"
        checked={overageProtection}
        onCheckedChange={onOverageProtectionChange}
      />
      <SettingItem
        title="Usage limit alerts"
        description="Alert at 80% and 95% usage"
        checked={usageLimitAlerts}
        onCheckedChange={onUsageLimitAlertsChange}
      />
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return renderGeneralContent()
      case "payment":
        return renderPaymentContent()
      case "invoices":
        return renderInvoicesContent()
      case "limits":
        return renderLimitsContent()
      default:
        return renderGeneralContent()
    }
  }

  return (
    <Card className={`mx-auto w-full sm:min-w-[600px] max-w-full sm:max-w-[90vw] lg:max-w-[1400px] overflow-hidden ${className || ""}`}>
      <CardHeader className="space-y-4">
        <CardTitle className="text-base sm:text-lg md:text-xl">Billing settings</CardTitle>
        <TabNavigation activeTab={activeTab} onTabChange={onTabChange} />
      </CardHeader>
      <CardContent>{renderTabContent()}</CardContent>
    </Card>
  )
}
