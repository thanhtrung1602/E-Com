/* eslint-disable @typescript-eslint/no-unused-vars */
import { CiDeliveryTruck, CiMoneyBill, CiLock, CiPhone, CiInstagram, CiFacebook, CiYoutube } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import bannerFooter from "~/assets/images/bannerFooter.png";
import americanexpress from "~/assets/images/americanexpress.png";
import mastercard from "~/assets/images/mastercard.png";
import paypal from "~/assets/images/paypal.png";
import visa from "~/assets/images/visa.png";
import pay from "~/assets/images/pay.png";
import stripe from "~/assets/images/stripe.png";

function Footer() {
    return (
        <footer>
            <div className="relative">
                <img src={bannerFooter} alt="" className="w-full h-80" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="font-semibold text-3xl mb-2">Join Our Newsletter</h2>
                    <p className="mb-8">Sign up for deals, new products and promotions</p>
                    <form action="" className="flex justify-between items-center border-b-2">
                        <div className="flex items-center gap-x-2 justify-start">
                            <MdOutlineMail className="size-5 text-[#b1b3b8]" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-transparent text-black outline-none pb-1" />
                        </div>
                        <button type="button" className="text-[#b1b3b8]">Sign Up</button>
                    </form>
                </div>
            </div>
            <div className="w-full px-36 flex justify-center gap-x-7">
                <div className="px-8 py-12 w-[262px]">
                    <CiDeliveryTruck className="size-12" />
                    <p className="text-xl font-medium w-full">Free Shipping</p>
                    <span className="text-sm">Order above $200</span>
                </div>
                <div className="px-8 py-12 w-[262px]">
                    <CiMoneyBill className="size-12" />
                    <p className="text-xl font-medium w-full">Money-back</p>
                    <span className="text-sm">30 days guarantee</span>
                </div>
                <div className="px-8 py-12 w-[262px]">
                    <CiLock className="size-12" />
                    <p className="text-xl font-medium w-full">Secure Payments</p>
                    <span className="text-sm">Secured by Stripe</span>
                </div>
                <div className="px-8 py-12 w-[262px]">
                    <CiPhone className="size-12" />
                    <p className="text-xl font-medium w-full">24/7 Support</p>
                    <span className="text-sm">Phone and Email support</span>
                </div>
            </div>
            <div className="bg-main600 px-36 pt-20 pb-8">
                <div className="flex justify-between">
                    <div className="w-[544px] text-white flex flex-col gap-y-8">
                        <h2 className="text-2xl font-semibold">Dream Team</h2>
                        <p className="text-xl">More than just a game.<br /> It’s a lifestyle.</p>
                        <div className="flex items-center gap-x-6">
                            <CiInstagram className="size-6" />
                            <CiFacebook className="size-6" />
                            <CiYoutube className="size-6" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-8 text-white w-40">
                        <h2 className="text-xl">Page</h2>
                        <div className="flex flex-col gap-y-4">
                            <span>Home</span>
                            <span>Shop</span>
                            <span>Contact</span>
                            <span>Blog</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-8 text-white w-40">
                        <h2 className="text-xl">Info</h2>
                        <div className="flex flex-col gap-y-4">
                            <span>Shipping Policy</span>
                            <span>Return & Refund</span>
                            <span>Support</span>
                            <span>FAQs</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-8 text-white w-40">
                        <h2 className="text-xl">Office</h2>
                        <div className="flex flex-col gap-y-4">
                            <span>District 12</span>
                            <span>Ho Chi Minh City</span>
                            <span>Vietnam</span>
                            <span>00-000000000</span>
                        </div>
                    </div>
                </div>
                <div className="pt-16 flex justify-between text-white">
                    <div className="flex">
                        <p className="pr-4">Copyright © 2023 3legant. All rights reserved</p>
                        <p className="px-4 border-l-[0.5px] text-[#6C7275]">Privacy Policy</p>
                        <p className="text-[#6C7275]">Terms & Conditions</p>
                    </div>
                    <div className="flex gap-x-2">
                        <img src={visa} alt="" />
                        <img src={americanexpress} alt="" />
                        <img src={mastercard} alt="" />
                        <img src={stripe} alt="" />
                        <img src={paypal} alt="" />
                        <img src={pay} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;