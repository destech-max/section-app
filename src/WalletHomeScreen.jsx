import {
  Headphones,
  ScanLine,
  Bell,
  Eye,
  ChevronRight,
  Store,
  PiggyBank,
  Gift,
  Send,
  Landmark,
  ArrowLeftRight,
  AlertCircle,
  Smartphone,
  Wifi,
  Dice5,
  Tv,
  Lock,
  HandCoins,
  Megaphone,
  GraduationCap,
  Home,
  Gem,
  BarChart3,
  CreditCard,
  User,
} from "lucide-react";

export default function WalletHomeScreen() {
  const transactions = [
    {
      icon: PiggyBank,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      title: "Spend & Save Deposit",
      date: "Aug 13th, 18:26:24",
      amount: "₦5.00",
      strike: true,
      status: "Successful",
    },
    {
      icon: Gift,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Bonus from Data Purchase",
      date: "Aug 13th, 18:26:24",
      amount: "+₦5.00",
      strike: false,
      status: "Successful",
    },
  ];

  const quickActions = [
    { icon: Send, label: "To OPay" },
    { icon: Landmark, label: "To Bank" },
    { icon: ArrowLeftRight, label: "Withdraw" },
  ];

  const services = [
    { icon: Smartphone, label: "Airtime", badge: "Up to 6%" },
    { icon: Wifi, label: "Data" },
    { icon: Dice5, label: "Betting" },
    { icon: Tv, label: "TV" },
    { icon: Lock, label: "SafeBox" },
    { icon: HandCoins, label: "Loan", badge: "Hot" },
    { icon: Megaphone, label: "Invitation" },
    { icon: GraduationCap, label: "More" },
  ];

  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Gem, label: "Rewards" },
    { icon: BarChart3, label: "Finance" },
    { icon: CreditCard, label: "Cards" },
    { icon: User, label: "Me" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-sm w-full mx-auto bg-gray-50 rounded-2xl overflow-hidden">

        {/* Top bar */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4">
          <div className="flex items-center gap-2">
            <img
              src="https://ui-avatars.com/api/?name=Destiny&background=random"
              alt="Destiny"
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className="text-gray-900 font-semibold text-base">Hi, Destiny</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Headphones className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1.5 -right-2 bg-pink-500 text-white text-[8px] font-bold px-1 rounded-full">
                HELP
              </span>
            </div>
            <ScanLine className="w-5 h-5 text-gray-700" />
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[8px] font-bold px-1 rounded-full">
                99+
              </span>
            </div>
          </div>
        </div>

        {/* Balance card */}
        <div className="mx-4 rounded-2xl overflow-hidden">
          <div className="bg-emerald-500 px-5 pt-5 pb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5 text-white text-sm">
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                  ✓
                </span>
                Available Balance
                <Eye className="w-3.5 h-3.5" />
              </div>
              <button className="flex items-center gap-1 text-white text-sm">
                Transaction History <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white text-2xl font-bold">
                ₦1,711.75 <ChevronRight className="w-5 h-5" />
              </div>
              <button className="bg-white text-emerald-600 text-sm font-semibold px-4 py-2 rounded-full">
                + Add Money
              </button>
            </div>
          </div>

          {/* Business service bar */}
          <div className="bg-emerald-100 flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Store className="w-4 h-4 text-emerald-600" />
              Business Service - Today's Sales: <span className="line-through">₦0.00</span>
            </div>
            <ChevronRight className="w-4 h-4 text-emerald-600" />
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white mx-4 mt-4 rounded-2xl divide-y divide-gray-100">
          {transactions.map((t, i) => (
            <div key={i} className="flex items-center justify-between px-4 py-3.5">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${t.iconBg}`}>
                  <t.icon className={`w-4 h-4 ${t.iconColor}`} />
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-medium">{t.title}</p>
                  <p className="text-gray-400 text-xs">{t.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-semibold ${t.strike ? "text-gray-900 line-through" : "text-emerald-600"}`}>
                  {t.amount}
                </p>
                <p className="text-emerald-600 text-xs bg-emerald-50 px-1.5 rounded mt-0.5 inline-block">
                  {t.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="bg-white mx-4 mt-4 rounded-2xl grid grid-cols-3 py-6">
          {quickActions.map((a, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-11 h-11 bg-emerald-500 rounded-xl flex items-center justify-center">
                <a.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-700 text-sm">{a.label}</span>
            </div>
          ))}
        </div>

        {/* BVN/NIN alert */}
        <div className="bg-white mx-4 mt-4 rounded-2xl flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-4 h-4 text-orange-500" />
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            <div>
              <p className="text-gray-900 text-sm font-semibold">
                Your BVN and NIN info do not match
              </p>
              <p className="text-gray-400 text-xs">Click to view more details</p>
            </div>
          </div>
          <button className="bg-emerald-500 text-white text-sm font-semibold px-5 py-1.5 rounded-full">
            Go
          </button>
        </div>

        {/* Services grid */}
        <div className="bg-white mx-4 mt-4 rounded-2xl grid grid-cols-4 gap-y-6 py-6">
          {services.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center gap-2">
              {s.badge && (
                <span className="absolute -top-1 right-1 bg-pink-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                  {s.badge}
                </span>
              )}
              <div className="w-11 h-11 bg-emerald-500 rounded-xl flex items-center justify-center">
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-700 text-xs">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Smart Picks */}
        <div className="mx-4 mt-4 mb-4 bg-gradient-to-r from-emerald-50 to-yellow-50 rounded-2xl px-4 py-4">
          <p className="text-gray-900 font-semibold text-sm">Smart Picks for You</p>
        </div>

        {/* Bottom nav */}
        <div className="bg-white border-t border-gray-100 flex items-center justify-between px-6 py-3">
          {navItems.map((n, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <n.icon className={`w-5 h-5 ${n.active ? "text-emerald-600" : "text-gray-400"}`} />
              <span className={`text-xs ${n.active ? "text-emerald-600 font-medium" : "text-gray-400"}`}>
                {n.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}