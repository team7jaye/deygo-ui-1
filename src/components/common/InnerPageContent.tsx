import InfoPill from '@/components/common/InfoPill';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { LuClock3 } from 'react-icons/lu';

const InnerPageContent = ({ data }: { data: Record<string, any> }) => {
  const { title, actions, extras, content, photos, amenities } = data;
  return (
    <>
      <div className="divide-y divide-secondary-40">
        <div className="px-[2.1875rem] space-y-5 mb-8 md:pt-[2.125rem]">
          <h2 className="hidden md:block font-bold text-2xl">{title}</h2>
          <div className="rounded-3xl">
            <img src="/map.png" alt="map" />
          </div>
          <div className="flex gap-16 items-center justify-center">
            {(actions as Record<string, any>[])?.map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center gap-[12.75px] text-secondary-50 font-semibold text-sm"
              >
                <div>
                  <item.icon className="text-4xl" />
                </div>
                <span className="text-secondary-60">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="flex gap-2.5 items-center flex-wrap py-6 px-6">
          {(extras as Record<string, any>[]).map((item) => (
            <InfoPill item={item} key={item.text} />
          ))}
        </div> */}
        <div className="grid md:grid-cols-2 px-7 py-3.5 max-md:gap-4">
          <div className="space-y-3.5">
            <h3 className="font-bold font-aleo">Opening Hours</h3>
            <div className="text-[0.9375rem] space-y-4">
              <div className="flex items-center gap-2 text-secondary-60">
                <LuClock3 className="text-secondary-50" />
                <span>Mondays - Saturdays | 07:00AM - 19:00AM</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-60">
                <LuClock3 className="text-secondary-50" />
                <span>Sundays | Closed</span>
              </div>
            </div>
          </div>
          <div className="space-y-3.5">
            <h3 className="font-bold font-aleo">Contact Information</h3>
            <div className="text-[0.9375rem] space-y-4">
              <div className="flex items-center gap-2 text-secondary-60">
                <FaPhoneAlt className="text-secondary-50" />
                <span>Phone number: {content?.contact?.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-60">
                <FaEnvelope className="text-secondary-50" />
                <span>Email address: {content?.contact?.email}</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-60">
                <FaEnvelope className="text-secondary-50" />
                <span>Address: {content?.address}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-7 py-3.5 space-y-3.5">
          <h3 className="font-bold font-aleo">Description</h3>
          <p className="text-[0.9375rem]">{content?.description}</p>
        </div>
        <div className="px-7 py-3.5 space-y-3.5">
          <h3 className="font-bold font-aleo">Photos</h3>
          <div className="flex gap-[8.87px] overflow-auto">
            {(photos as Record<string, any>[])?.map((photo, i) => (
              <div
                key={i}
                className="max-w-[6.65rem] overflow-hidden rounded-[13.3px] flex-shrink-0"
              >
                <img
                  src={photo as unknown as string}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="px-7 py-3.5 space-y-3.5">
          <h3 className="font-bold font-aleo">Amenities</h3>
          <div className="flex gap-2.5 items-center flex-wrap">
            {(amenities as Record<string, any>[])?.map((item) => (
              <InfoPill item={item} key={item.text} />
            ))}
          </div>
        </div>
        {/* <div className="px-7 py-3.5">
          <div className="min-w-[4rem] w-max h-auto bg-[#059C1D] rounded-3xl flex items-center px-2.5 py-1.5">
            <FaCheckCircle className="text-white mr-2 h-4 w-4" />
            <div className="text-white text-xs font-medium">Owner-verified</div>
          </div>
        </div> */}
      </div>
      <div>
        <p className="text-center py-24">Report a problem</p>
      </div>
    </>
  );
};

export default InnerPageContent;
