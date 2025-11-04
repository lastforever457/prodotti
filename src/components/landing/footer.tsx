"use client";

import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import icon from "../../../public/images/image.png";
const MapComponent = dynamic(() => import("../map-component"), { ssr: false });

const Footer = () => {
  const t = useTranslations();

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-900 to-emerald-900 text-white pt-20 pb-10 relative overflow-hidden"
    >
      <div className="container-cs">
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="space-y-6">
            <Image
              src={icon}
              alt="PRODOTTI Boutique"
              width={150}
              height={75}
              className="h-16 w-auto"
            />
            <p className="text-gray-400 leading-relaxed max-w-md">
              {t("footer-desc")}
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/prodotti.uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-main transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">{t("contact us")}</h4>
            <div className="space-y-4 text-gray-400">
              <Link
                href="tel:+998950779009"
                className="flex items-center space-x-3"
              >
                <div className="">
                  <Phone className="w-5 h-5 text-stone-300" />
                </div>
                <span>+998 95 077 90 09</span>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="">
                  <Mail className="w-5 h-5 text-stone-300" />
                </div>
                <span>info@prodotti.uz</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="">
                  <MapPin className="w-5 h-5 text-stone-300" />
                </div>
                <span>{t("O'zbekiston, Toshkent, Oloy bozori")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="">
                  <Clock className="w-5 h-5 text-stone-300" />
                </div>
                <span>{t("har kuni")}: 08:00-19:00</span>
              </div>
            </div>
          </div>
          <div className="h-[300px]">
            <MapComponent />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PRODOTTI Boutique.{" "}
            {t("Barcha huquqlar himoyalangan")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
