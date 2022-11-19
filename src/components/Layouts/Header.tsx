import { ChangeEvent, useRef, useState } from 'react';
import Search from '~/components/Search';

type Dark = { value: boolean };
const dark: Dark = { value: false };

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
  dark.value = true;
} else {
  document.documentElement.classList.remove('dark');
}

function Header() {
  const [checkValue, setCheckValue] = useState<boolean>(() => dark.value);

  const handleDarkModeTaggle = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      setCheckValue(true);
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      setCheckValue(false);
    }
  };

  return (
    <header className="h-14 border-b border-gray-200 dark:border-gray-500  shadow-sm bg-sky-400">
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-col-3 grid-flow-col gap-0 h-full items-center">
          <div>
            <h2 className="text-lg text-white font-extrabold">Football</h2>
          </div>
          <div className="text-center">
            <div className="max-w-xs m-auto">
              <Search />
            </div>
          </div>
          <div className="text-right">
            <div className="flex justify-end">
              <span className="mr-3 text-sm font-medium text-white">Chế độ tối</span>
              <label
                htmlFor="default-toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={checkValue}
                  id="default-toggle"
                  className="sr-only peer"
                  onChange={(event) => handleDarkModeTaggle(event)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
