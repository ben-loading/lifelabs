'use client'

export function MysticalSymbols() {
  const symbols = [
    { char: '乾', delay: '0s', x: '10%', y: '15%' },
    { char: '坤', delay: '0.5s', x: '85%', y: '20%' },
    { char: '震', delay: '1s', x: '15%', y: '75%' },
    { char: '巽', delay: '1.5s', x: '80%', y: '70%' },
    { char: '坎', delay: '2s', x: '50%', y: '40%' },
    { char: '离', delay: '2.5s', x: '30%', y: '50%' },
    { char: '艮', delay: '3s', x: '70%', y: '45%' },
    { char: '兑', delay: '3.5s', x: '45%', y: '80%' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {symbols.map((symbol, i) => (
        <div
          key={i}
          className="absolute text-2xl font-serif opacity-0 animate-[fadeInOut_8s_ease-in-out_infinite]"
          style={{
            left: symbol.x,
            top: symbol.y,
            animationDelay: symbol.delay,
            color: 'oklch(0.45 0.02 270)',
          }}
        >
          {symbol.char}
        </div>
      ))}
    </div>
  )
}
