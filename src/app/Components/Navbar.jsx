"use client"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
Dialog,
DialogPanel,
Disclosure,
DisclosureButton,
DisclosurePanel,
Popover,
PopoverButton,
PopoverGroup,
PopoverPanel,
} from '@headlessui/react'
import {
ArrowPathIcon,
Bars3Icon,
ChartPieIcon,
CursorArrowRaysIcon,
FingerPrintIcon,
SquaresPlusIcon,
XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const products = [
{ name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
{ name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
{ name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
{ name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
{ name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
{ name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Navbar() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const Cartqty=useSelector(state=>state.CartReducer)
return (
    <header className="bg-white">
    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex ">
        <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
        </Link>
        </div>
        <div className="flex lg:hidden">
        <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
        </div>
        <div className=' hidden border-1 border-black md:flex justify-between flex-3 lg:w-[50%] '>
        <a className='text-sm font-semibold leading-6 text-gray-900  hover:cursor-pointer'>Products</a>
        <a className='text-sm font-semibold leading-6 text-gray-900  hover:cursor-pointer'>Mens</a>
        <a className='text-sm font-semibold leading-6 text-gray-900  hover:cursor-pointer'>Women</a>
        <a className='text-sm font-semibold leading-6 text-gray-900  hover:cursor-pointer'>Setting</a>
        </div>
        
        <Link href='/Cart'>
        <span class="inline-flex items-center rounded-md bg-blue-700  text-xs font-medium text-white px-2 py-1 rounded-full ring-1 ring-inset ring-gray-500/10">{Cartqty.length}</span>

        <div className='bg-blue-500  md:visible text-white hover:bg-blue-400 hover:cursor-pointer p-2 rounded-lg'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 font-semibold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        </div>
        </Link>
    </nav>
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
            />
            </a>
            <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
        </div>
        <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                    <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                        {item.name}
                    </DisclosureButton>
                    ))}
                </DisclosurePanel>
                </Disclosure>
                <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                Features
                </a>
                <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                Marketplace
                </a>
                <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                Company
                </a>
            </div>
            <div className="py-6">
                <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                Log in
                </a>
                <div>
                <a href='/Cart' className='font-semibold text-base leading-7 text-gray-900'>Add to Cart</a>
                </div>
            </div>
            </div>
        </div>
        </DialogPanel>
    </Dialog>
    </header>
)
}
