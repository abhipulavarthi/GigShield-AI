import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Check, X, ShieldCheck } from 'lucide-react';

export default function Plans() {
  const plans = [
    {
      id: 'lite',
      name: 'ShieldLite',
      badge: 'Lite',
      badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
      description: 'New workers · low-risk zones',
      price: '15',
      priceUnit: '/ week',
      stats: [
        { label: 'MAX PAYOUT', value: '₹500' },
        { label: 'PER TRIGGER', value: '₹200' },
        { label: 'MAX TRIGGERS', value: '2/week' },
        { label: 'ZONE TIER', value: '1 – 2' }
      ],
      features: [
        { text: 'Heavy rain coverage', included: true },
        { text: 'Heatwave coverage', included: true },
        { text: 'Safety valve (₹0 if <₹2000)', included: true },
        { text: 'Trust fast-track · 4 weeks', included: true },
        { text: 'Pollution & traffic cover', included: false },
        { text: 'Curfew & flash flood', included: false }
      ],
      whoItsFor: [
        'New delivery workers with no claims history',
        'Workers in low-risk Tier 1–2 zones',
        'Part-time or weekend gig workers'
      ],
      reasoning: "ShieldLite is the entry point — designed for workers who are just starting out or working in relatively safe zones. At ₹15/week it removes the cost barrier entirely, letting workers experience automatic payouts and build a trust score over 4 weeks. The two covered triggers (rain and heatwave) are the most common across all Indian cities, so even a minimal plan delivers real value. Once trust is established, upgrading to Plus is frictionless."
    },
    {
      id: 'plus',
      name: 'ShieldPlus',
      badge: 'Plus',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      isPopular: true,
      description: 'Regular workers · medium-risk zones',
      price: '25',
      priceUnit: '/ week',
      stats: [
        { label: 'MAX PAYOUT', value: '₹1200' },
        { label: 'PER TRIGGER', value: '₹350' },
        { label: 'MAX TRIGGERS', value: '3/week' },
        { label: 'ZONE TIER', value: '2 – 3' }
      ],
      features: [
        { text: 'Heavy rain + heatwave', included: true },
        { text: 'Pollution cover (AQI > 350)', included: true },
        { text: 'Traffic congestion cover', included: true },
        { text: 'Safety valve (50% off <₹2000)', included: true },
        { text: 'AI zone upgrade · monsoon', included: true },
        { text: 'Trust fast-track · 3 weeks', included: true }
      ],
      whoItsFor: [
        'Regular full-day Zomato / Swiggy workers',
        'Workers in urban Tier 2–3 zones with traffic exposure',
        'Workers who\'ve completed 3+ weeks on the platform'
      ],
      reasoning: "ShieldPlus is the sweet spot for most gig workers. It covers all 4 primary triggers — rain, heatwave, pollution, and traffic — which together account for the vast majority of income disruptions in Indian metros. The AI zone-upgrade feature is a standout: during monsoon weeks, the system automatically elevates the zone's risk tier and adjusts protection without requiring the worker to do anything. At ₹25/week, the ₹1200 weekly payout ceiling means a bad monsoon week can still be meaningfully cushioned."
    },
    {
      id: 'pro',
      name: 'ShieldPro',
      badge: 'Pro',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      description: 'Full-time workers · high-risk zones',
      price: '35',
      priceUnit: '/ week',
      stats: [
        { label: 'MAX PAYOUT', value: '₹2000' },
        { label: 'PER TRIGGER', value: '₹500' },
        { label: 'MAX TRIGGERS', value: '4/week' },
        { label: 'ZONE TIER', value: '3 – 4' }
      ],
      features: [
        { text: 'All Plus coverage', included: true },
        { text: 'Curfew / shutdown cover', included: true },
        { text: 'Safety valve (₹0 if <₹2000)', included: true },
        { text: 'Trust fast-track · 2 weeks', included: true },
        { text: 'Priority fraud review', included: true },
        { text: 'Flash flood coverage', included: false }
      ],
      whoItsFor: [
        'Full-time workers doing 8-10 hour daily shifts',
        'Workers in dense urban Tier 3–4 zones (Mumbai, Chennai, Hyderabad)',
        'Workers with dependents but not yet on ShieldFamily'
      ],
      reasoning: "ShieldPro is built for workers whose income is genuinely load-bearing. The addition of curfew and local shutdown coverage matters enormously in cities where political events, festivals, or law-and-order situations can shut down entire zones for a full day. With a ₹2000/week payout ceiling and 4 triggers per week, a complete monsoon week can still be partially recovered. The safety valve here waives the premium entirely (not just 50%) when earnings dip below ₹2000 — because high-tier workers in bad weeks need the most protection, not the most cost."
    },
    {
      id: 'max',
      name: 'ShieldMax',
      badge: 'Max',
      badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
      description: 'Extreme-risk · monsoon season',
      price: '50',
      priceUnit: '/ week',
      stats: [
        { label: 'MAX PAYOUT', value: '₹3500' },
        { label: 'PER TRIGGER', value: '₹700' },
        { label: 'MAX TRIGGERS', value: '5/week' },
        { label: 'ZONE TIER', value: '4 – 5' }
      ],
      features: [
        { text: 'All Pro coverage', included: true },
        { text: 'Flash flood coverage', included: true },
        { text: 'Instant payout (high trust)', included: true },
        { text: 'Safety valve (50% off <₹2000)', included: true },
        { text: 'Multi-layer fraud shield', included: true },
        { text: 'IMD + weather station sync', included: true }
      ],
      whoItsFor: [
        'Workers in Tier 4–5 flood-prone zones (Chennai, Mumbai coastal, Patna)',
        'Seasonal workers active during June–September monsoon peak',
        'High-trust verified workers wanting instant payout with no re-validation'
      ],
      reasoning: "ShieldMax is the top-tier plan for workers operating in the highest-risk conditions in India. Flash flood is its exclusive 6th trigger — triggered by IMD flood zone alerts and validated through barometric, acoustic, and GPS cross-checks — and pays the maximum ₹700 per event. The ₹3500 weekly ceiling means even a catastrophic week with 5 trigger events is substantially covered. For verified high-trust users, payouts are instant — no re-validation queue, no hold period. This plan is also ideal as a seasonal upgrade: a Plus or Pro worker can switch to Max for the monsoon months and switch back, keeping costs low year-round."
    },
    {
      id: 'family',
      name: 'ShieldFamily',
      badge: 'Family',
      badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      description: 'For workers supporting dependents',
      price: '45',
      priceUnit: '/ week',
      stats: [
        { label: 'MAX PAYOUT', value: '₹2500' },
        { label: 'PER TRIGGER', value: '₹600' },
        { label: 'MAX TRIGGERS', value: '4/week' },
        { label: 'ZONE TIER', value: '2 – 4' }
      ],
      features: [
        { text: 'Income support for dependents', included: true },
        { text: 'Dependent buffer: +₹200/trigger', included: true },
        { text: 'Survival threshold: ₹2500/week', included: true },
        { text: 'Safety valve (₹0 if <₹2500)', included: true },
        { text: 'All Lite + Plus triggers', included: true },
        { text: 'Unique: higher survival threshold', included: true }
      ],
      whoItsFor: [
        'Workers with children or elderly dependents',
        'Single-income household earners',
        'Workers in Tier 2-4 zones needing higher buffer'
      ],
      reasoning: "ShieldFamily addresses a real gap — a worker supporting 2 kids and an elderly parent has fundamentally higher financial stakes than a single worker. The key differentiator is the dependent buffer: ₹200 extra per trigger payout, auto-applied when dependents are registered in the profile. The survival threshold is also raised to ₹2500/week (vs ₹2000 for other plans) since family expenses are higher. This makes the safety valve more meaningful for the people who need it most."
    },
    {
      id: 'fleet',
      name: 'ShieldFleet',
      badge: 'Fleet',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      description: 'Group plan for 5–50 workers · restaurant fleets',
      price: '18',
      priceUnit: '/ worker / week',
      stats: [
        { label: 'MAX PAYOUT / WORKER', value: '₹1500' },
        { label: 'PER TRIGGER', value: '₹400' },
        { label: 'MAX TRIGGERS', value: '3/week' },
        { label: 'ZONE TIER', value: '1 – 3' }
      ],
      features: [
        { text: 'Min. 5 workers per fleet', included: true },
        { text: 'Fleet discount (Up to 30% off)', included: true },
        { text: 'Admin dashboard included', included: true },
        { text: 'B2B billing & account portal', included: true },
        { text: 'Individual tracking per rider', included: true },
        { text: 'Aggregator billing support', included: true }
      ],
      whoItsFor: [
        'Restaurant chains covering their delivery staff',
        'Zomato/Swiggy fleet managers (5–50 riders)',
        'NGOs or unions enrolling gig workers in bulk'
      ],
      reasoning: "ShieldFleet opens a B2B channel — instead of individual sign-ups, a restaurant chain or fleet manager enrolls their entire delivery team under one account. At 30 workers, the 30% discount brings the effective cost to just ₹12.60/worker/week, which is cheaper than ShieldLite for the individual. Each worker still gets individual tracking and payouts, but billing goes to the fleet admin. This is also a strong distribution strategy — onboarding one restaurant can mean 20–40 workers covered instantly."
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-white selection:text-[#000000] p-6 lg:p-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <header className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold opacity-60 hover:opacity-100 transition-opacity">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div />
        </header>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter">Choose Your Coverage</h1>
          <p className="text-lg opacity-60 max-w-2xl">Specialized parametric protection for every type of gig work.</p>
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className={`relative border rounded-3xl p-8 bg-white/[0.02] flex flex-col gap-8 transition-all hover:border-white/50
              ${plan.isPopular ? 'border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-white/25'}`}>
              
              {plan.isPopular && (
                <div className="absolute -top-3 right-8 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most popular
                </div>
              )}

              <div className="flex flex-col gap-4">
                <span className={`w-fit text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border ${plan.badgeColor}`}>
                  {plan.badge}
                </span>
                <div className="flex flex-col gap-1">
                  <h2 className="text-3xl font-bold tracking-tight">{plan.name}</h2>
                  <p className="text-sm opacity-50">{plan.description}</p>
                </div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-5xl font-black">₹{plan.price}</span>
                  <span className="text-sm opacity-40">{plan.priceUnit}</span>
                </div>
              </div>

              {/* Stats Block */}
              <div className="grid grid-cols-2 gap-2">
                {plan.stats.map((stat, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-3 flex flex-col gap-1">
                    <span className="text-[9px] font-bold opacity-40 tracking-widest uppercase">{stat.label}</span>
                    <span className="text-lg font-black tracking-tight">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className={`flex items-center gap-3 text-sm ${feature.included ? 'opacity-90' : 'opacity-30'}`}>
                    {feature.included ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-white" />
                    ) : (
                      <X className="w-4 h-4 shrink-0" />
                    )}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 rounded-xl border border-white/20 font-bold text-sm hover:bg-white hover:text-black transition-all mt-auto active:scale-[0.98]">
                Get started
              </button>
            </div>
          ))}
        </div>

        {/* Info Grid */}
        <div className="flex flex-col gap-12 mt-16 pt-16 border-t border-white/10">
          <h2 className="text-3xl font-bold tracking-tight">Plan Deep Dive</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {plans.map((plan) => (
              <div key={plan.id + '-info'} className="flex flex-col gap-6 p-8 border border-white/10 rounded-2xl bg-white/[0.01]">
                <div className="flex items-center gap-3">
                   <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded border ${plan.badgeColor}`}>
                     {plan.badge}
                   </span>
                   <h3 className="text-xl font-bold">{plan.name} — who it's for</h3>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest opacity-40">Target Users</h4>
                  <ul className="flex flex-col gap-3">
                    {plan.whoItsFor.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm opacity-80 border-b border-white/5 pb-2">
                        <Check className="w-4 h-4 text-white shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4 mt-2">
                  <p className="text-sm leading-relaxed opacity-70 italic border-l-2 border-white/10 pl-6 py-2">
                    "{plan.reasoning}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10 flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tighter">GigShield</h1>
            <p className="text-sm opacity-40 italic">Smart Parametric Coverage</p>
        </footer>
      </div>
    </div>
  );
}
