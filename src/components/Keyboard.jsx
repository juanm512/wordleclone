import React from 'react';

export default function Keyboard({handleKeyboardClick}) {

    return (
        <div className="flex flex-col container w-full max-w-lg pb-2 px-[10px] mx-auto gap-2 mt-8">
          <div className="flex gap-1">
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="q">q</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="w">w</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="e">e</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="r">r</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="t">t</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="y">y</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="u">u</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="i">i</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="o">o</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="p">p</button>
          </div>
          <div className="flex gap-1">
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="a">a</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="s">s</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="d">d</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="f">f</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="g">g</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="h">h</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="j">j</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="k">k</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="l">l</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="ñ">ñ</button>
          </div>
          <div className="flex gap-1">
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="enter">enviar</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="z">z</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="x">x</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="c">c</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="v">v</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="b">b</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="n">n</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="m">m</button>
            <button onClick={handleKeyboardClick} className="flex-1 rounded uppercase text-stone-200 font-bold p-1 sm:p-2 h-14 text-sm bg-neutral-700 undefined" data-letter="backspace">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="h-6 w-6 ml-1" data-letter="backspace">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" data-letter="backspace"></path>
              </svg>
            </button>
          </div>
        </div>
    );

}

