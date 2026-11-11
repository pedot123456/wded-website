import { Bot, CalendarCheck, Check, Search } from 'lucide-react'

/** Laptop + phone built with HTML/CSS. Purely decorative. */
export function DeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]" aria-hidden="true">
      {/* soft glow */}
      <div className="absolute inset-x-10 top-10 bottom-0 -z-10 rounded-full bg-primary/25 blur-3xl" />

      {/* Laptop */}
      <div className="relative">
        <div className="rounded-t-[14px] border border-white/15 bg-[#0A1A36] p-[2.2%] shadow-2xl">
          <div className="aspect-[16/10] overflow-hidden rounded-md bg-navy-deep">
            {/* browser bar */}
            <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/[0.03] px-3 py-2">
              <span className="size-2 rounded-full bg-[#FF5F57]" />
              <span className="size-2 rounded-full bg-[#FEBC2E]" />
              <span className="size-2 rounded-full bg-[#28C840]" />
              <div className="ml-3 flex h-4 flex-1 items-center gap-1 rounded-full bg-white/6 px-2 text-[7px] text-muted sm:text-[8px]">
                <Search className="size-2" /> yourbusiness.my
              </div>
            </div>
            {/* fake site */}
            <div className="relative h-full p-[5%]">
              <div className="flex items-center justify-between">
                <img src="/w-mark.webp" alt="" width={36} height={20} className="h-3 w-auto sm:h-4" />
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-1 w-5 rounded-full bg-white/20 sm:w-6" />
                  ))}
                  <span className="h-1.5 w-7 rounded-full bg-primary sm:w-8" />
                </div>
              </div>
              <div className="mt-[7%] grid grid-cols-5 gap-[4%]">
                <div className="col-span-3">
                  <div className="h-2 w-[85%] rounded-full bg-ink/85 sm:h-3" />
                  <div className="mt-1.5 h-2 w-[60%] rounded-full bg-ink/85 sm:h-3" />
                  <div className="mt-3 h-1 w-[90%] rounded-full bg-muted/40" />
                  <div className="mt-1 h-1 w-[75%] rounded-full bg-muted/40" />
                  <div className="mt-4 flex gap-2">
                    <span className="h-3 w-12 rounded-full bg-primary sm:h-4 sm:w-14" />
                    <span className="h-3 w-10 rounded-full border border-white/25 sm:h-4 sm:w-12" />
                  </div>
                </div>
                <div className="col-span-2 rounded-lg bg-gradient-to-br from-primary/50 to-cyan/20 p-2">
                  <div className="h-full rounded-md border border-white/15 bg-navy/60" />
                </div>
              </div>
              <div className="mt-[6%] grid grid-cols-3 gap-[3%]">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="rounded-md border border-white/8 bg-card/60 p-1.5 sm:p-2">
                    <span className="block size-2.5 rounded bg-cyan/70 sm:size-3" />
                    <span className="mt-1.5 block h-1 w-[80%] rounded-full bg-white/30" />
                    <span className="mt-1 block h-1 w-[55%] rounded-full bg-white/15" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* base */}
        <div className="relative mx-[-6%] h-[10px] rounded-b-[14px] bg-gradient-to-b from-[#3A5A8C] to-[#1A2F55] sm:h-[14px]">
          <div className="absolute top-0 left-1/2 h-[4px] w-[16%] -translate-x-1/2 rounded-b-md bg-[#0D1E3D]" />
        </div>
      </div>

      {/* Phone */}
      <div className="absolute right-[-2%] bottom-[-10%] w-[30%] sm:right-[-4%]" style={{ transform: 'translateZ(40px)' }}>
        <div className="rounded-[18px] border border-white/20 bg-[#0A1A36] p-[5%] shadow-[0_20px_50px_-10px_rgb(0_0_0/0.8)] sm:rounded-[22px]">
          <div className="aspect-[9/19] overflow-hidden rounded-[13px] bg-navy-deep sm:rounded-[16px]">
            <div className="mx-auto mt-1.5 h-1.5 w-[35%] rounded-full bg-black/70" />
            <div className="flex items-center gap-1.5 px-2 pt-2 pb-1.5">
              <span className="grid size-4 place-items-center rounded-full bg-primary/25 text-cyan sm:size-5">
                <Bot className="size-2.5 sm:size-3" />
              </span>
              <div>
                <div className="text-[6px] leading-tight font-semibold text-ink sm:text-[8px]">AI Assistant</div>
                <div className="flex items-center gap-0.5 text-[5px] text-[#28C840] sm:text-[6px]">
                  <span className="size-1 rounded-full bg-[#28C840]" /> online 24/7
                </div>
              </div>
            </div>
            <div className="space-y-1.5 px-2 text-[5.5px] leading-snug sm:text-[7px]">
              <div className="ml-auto w-[78%] rounded-lg rounded-br-sm bg-primary px-1.5 py-1 text-navy-deep">
                Hi, can I book for Saturday?
              </div>
              <div className="w-[82%] rounded-lg rounded-bl-sm bg-card px-1.5 py-1 text-ink">
                Sure! 10am or 2pm available.
              </div>
              <div className="ml-auto w-[40%] rounded-lg rounded-br-sm bg-primary px-1.5 py-1 text-navy-deep">10am</div>
              <div className="w-[86%] rounded-lg rounded-bl-sm bg-card px-1.5 py-1 text-ink">
                <span className="flex items-center gap-1 font-semibold text-cyan">
                  <CalendarCheck className="size-2 sm:size-2.5" /> Booked
                </span>
                Sat, 10:00am. See you!
              </div>
              <div className="flex w-[30%] gap-0.5 rounded-lg bg-card px-1.5 py-1.5">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="size-1 rounded-full bg-muted" style={{ animation: `blink 1.2s ${i * 0.2}s infinite` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating badge */}
      <div
        className="absolute top-[8%] left-[-4%] hidden items-center gap-1.5 rounded-full border border-white/10 bg-navy-deep/90 px-3 py-1.5 text-[11px] font-medium text-ink shadow-lg backdrop-blur xs:flex"
        style={{ animation: 'float-y 5s ease-in-out infinite' }}
      >
        <span className="grid size-4 place-items-center rounded-full bg-[#28C840]/20 text-[#28C840]">
          <Check className="size-2.5" />
        </span>
        Installable app
      </div>
    </div>
  )
}
