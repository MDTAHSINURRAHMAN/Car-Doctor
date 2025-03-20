import React from "react";
import Image from "next/image";
import Link from "next/link";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export default async function ServicesSection() {
  const servicesCollection = await dbConnect(
    collectionNamesObj.servicesCollection
  );
  const data = await servicesCollection.find({}).toArray();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive automotive services to keep your vehicle
            running smoothly and efficiently. Choose from our wide range of
            professional services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 truncate">
                    {service.title}
                  </h3>
                  <span className="bg-blue-100 text-orange-500 text-sm font-medium py-1 px-2 rounded-full">
                    ${service.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description.substring(0, 100)}...
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  {service.facility.slice(0, 2).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-orange-500 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item.name}
                    </div>
                  ))}
                </div>
                <Link
                  href={`/services/${service._id}`}
                  className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
