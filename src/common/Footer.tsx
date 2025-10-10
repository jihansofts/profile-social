"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-gray-700">
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Įmonė</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-red-600">
                Pagrindinis
              </Link>
            </li>
            <li>
              <Link href="/verslui" className="hover:text-red-600">
                Verslui
              </Link>
            </li>
            <li>
              <Link href="/apie-mus" className="hover:text-red-600">
                Apie mus
              </Link>
            </li>
            <li>
              <Link href="/prisijungti" className="hover:text-red-600">
                Prisijungti
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Teisė</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/taisykles" className="hover:text-red-600">
                Taisyklės
              </Link>
            </li>
            <li>
              <Link href="/slapukai" className="hover:text-red-600">
                Slapukai
              </Link>
            </li>
            <li>
              <Link href="/privatumas" className="hover:text-red-600">
                Privatumas
              </Link>
            </li>
            <li>
              <Link href="/teisine-informacija" className="hover:text-red-600">
                Teisinė informacija
              </Link>
            </li>
            <li>
              <Link href="/bdar" className="hover:text-red-600">
                BDAR
              </Link>
            </li>
            <li>
              <Link href="/politikos" className="hover:text-red-600">
                Politikos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">
            Platforma
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/prenumerata" className="hover:text-red-600">
                Prenumerata
              </Link>
            </li>
            <li>
              <Link href="/klubai" className="hover:text-red-600">
                Klubai
              </Link>
            </li>
            <li>
              <Link href="/parduotuvės" className="hover:text-red-600">
                Parduotuvės
              </Link>
            </li>
            <li>
              <Link href="/naujienos" className="hover:text-red-600">
                Naujienos
              </Link>
            </li>
            <li>
              <Link href="/akcijos" className="hover:text-red-600">
                Akcijos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Top</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/skelbimai" className="hover:text-red-600">
                Skelbimai
              </Link>
            </li>
            <li>
              <Link href="/paslaugos" className="hover:text-red-600">
                Paslaugos
              </Link>
            </li>
            <li>
              <Link href="/varzybos" className="hover:text-red-600">
                Varžybos
              </Link>
            </li>
            <li>
              <Link href="/nupirkis" className="hover:text-red-600">
                Nupirkis
              </Link>
            </li>
            <li>
              <Link
                href="/komercines-medziokles"
                className="hover:text-red-600"
              >
                Komercinės medžioklės
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Pagalba</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/duk" className="hover:text-red-600">
                D.U.K.
              </Link>
            </li>
            <li>
              <Link href="/forumas" className="hover:text-red-600">
                Forumas
              </Link>
            </li>
            <li>
              <Link href="/kontaktai" className="hover:text-red-600">
                Kontaktai
              </Link>
            </li>
            <li>
              <Link href="/partneriai" className="hover:text-red-600">
                Partneriai
              </Link>
            </li>
            <li>
              <Link href="/svetaine-struktura" className="hover:text-red-600">
                Svetainės struktūra
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center py-6">
        <div className="flex justify-center space-x-4 mb-3">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="text-gray-600 hover:text-red-600 text-lg"
          >
            <FaFacebookF className="size-6" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="text-gray-600 hover:text-red-600 text-lg"
          >
            <FaInstagram className="size-6" />
          </Link>
        </div>

        <div className="bg-red-600 text-white py-2 text-sm">
          Visos Teisės Saugomos 2024 © UAB EHunter
        </div>
      </div>
    </footer>
  );
}
