import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";

export default function Aside({ items }) {
  // console.log(`items`, items);
  const [isOpen, setIsOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="grid gap-2 rounded-xl bg-[#48C0C0] p-3 text-white drop-shadow">
      <Disclosure>
        <Disclosure.Button className="flex items-center justify-between rounded-md bg-[#039A9A] p-2">
          <b className="whitespace-nowrap">Meal Type</b>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${isOpen ? `rotate-180` : ``} h-5 w-5`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel>
          <ul className={`rounded-md bg-[#11AAAA] p-2 text-sm leading-8`}>
            {items.mealType.map((item) => (
              <li key={item.slug}>
                <Link href={`/category/${item.slug}`}>
                  <a dangerouslySetInnerHTML={{ __html: item.name }}></a>
                </Link>
              </li>
            ))}
            {/* <li className="flex items-center justify-between">
              <b>Appetizers</b>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </li> */}
          </ul>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button className="flex items-center justify-between rounded-md bg-[#039A9A] p-2">
          <b className="whitespace-nowrap">Cooking Method</b>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${isOpen ? `rotate-180` : ``} h-5 w-5`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel>
          <ul className={`rounded-md bg-[#11AAAA] p-2 text-sm leading-8`}>
            {items.cookingMethod.map((item) => (
              <li key={item.slug}>
                <Link href={`/set/${item.slug}`}>
                  <a dangerouslySetInnerHTML={{ __html: item.name }}></a>
                </Link>
              </li>
            ))}
          </ul>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button className="flex items-center justify-between rounded-md bg-[#039A9A] p-2">
          <b>Cuisine</b>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${isOpen ? `rotate-180` : ``} h-5 w-5`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel>
          <ul className={`rounded-md bg-[#11AAAA] p-2 text-sm leading-8`}>
            {items.cuisine.map((item) => (
              <li key={item.slug}>
                <Link href={`/set/${item.slug}`}>
                  <a dangerouslySetInnerHTML={{ __html: item.name }}></a>
                </Link>
              </li>
            ))}
          </ul>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button className="flex items-center justify-between rounded-md bg-[#039A9A] p-2">
          <b>Dietary</b>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${isOpen ? `rotate-180` : ``} h-5 w-5`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel>
          <ul className={`rounded-md bg-[#11AAAA] p-2 text-sm leading-8`}>
            {items.dietary.map((item) => (
              <li key={item.slug}>
                <Link href={`/set/${item.slug}`}>
                  <a dangerouslySetInnerHTML={{ __html: item.name }}></a>
                </Link>
              </li>
            ))}
          </ul>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button className="flex items-center justify-between rounded-md bg-[#039A9A] p-2">
          <b>Holiday</b>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${isOpen ? `rotate-180` : ``} h-5 w-5`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel>
          <ul className={`rounded-md bg-[#11AAAA] p-2 text-sm leading-8`}>
            {items.holiday.map((item) => (
              <li key={item.slug}>
                <Link href={`/set/${item.slug}`}>
                  <a dangerouslySetInnerHTML={{ __html: item.name }}></a>
                </Link>
              </li>
            ))}
          </ul>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button className="flex items-center justify-between rounded-md bg-[#039A9A] p-2">
          <b>Seasonal</b>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${isOpen ? `rotate-180` : ``} h-5 w-5`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel>
          <ul className={`rounded-md bg-[#11AAAA] p-2 text-sm leading-8`}>
            {items.seasonal.map((item) => (
              <li key={item.slug}>
                <Link href={`/set/${item.slug}`}>
                  <a dangerouslySetInnerHTML={{ __html: item.name }}></a>
                </Link>
              </li>
            ))}
          </ul>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button className="flex items-center justify-between rounded-md bg-[#039A9A] p-2">
          <b className="whitespace-nowrap">Weight Watchers</b>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${isOpen ? `rotate-180` : ``} h-5 w-5`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel>
          <ul className={`rounded-md bg-[#11AAAA] p-2 text-sm leading-8`}>
            {items.weightWatchers.map((item) => (
              <li key={item.slug}>
                <Link href={`/set/${item.slug}`}>
                  <a dangerouslySetInnerHTML={{ __html: item.name }}></a>
                </Link>
              </li>
            ))}
          </ul>
        </Disclosure.Panel>
      </Disclosure>

      {/* <button className="rounded-md bg-white p-2 text-[#039A9A]">Reset</button> */}
    </div>
  );
}
