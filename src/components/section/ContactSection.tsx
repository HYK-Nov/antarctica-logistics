import { forwardRef, useEffect } from "react";
import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";
import { type SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  title: string;
  content: string;
  phone: string;
  email: string;
};

const ContactSection = forwardRef<HTMLElement>((_props, ref) => {
  const mapPosition = { lat: -62.121706, lng: -58.394007 };
  const [markerRef, marker] = useMarkerRef();
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const formatPhoneNumber = (value: string) => {
    const numbersOnly = value.replace(/\D/g, "");

    if (numbersOnly.length < 4) return numbersOnly;
    if (numbersOnly.length < 8)
      return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3)}`;
    return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3, 7)}-${numbersOnly.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue("phone", formatted);
  };

  useEffect(() => {
    if (!marker) {
      return;
    }
  }, [marker]);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <section
        className={"container flex min-h-screen flex-col items-center py-20"}
        ref={ref}
      >
        <h1 className={"Aggro text-4xl text-blue-600"}>문의하기</h1>

        <div className={"grid w-full grid-cols-1 gap-10 py-10 md:grid-cols-2"}>
          {/* 지도 */}
          <Map
            className={"h-[300px] w-full md:h-full"}
            defaultCenter={mapPosition}
            defaultZoom={11}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          >
            <Marker ref={markerRef} position={mapPosition} />
          </Map>

          {/* 문의 */}
          <form
            className={
              "flex flex-col gap-5 rounded border border-neutral-200 p-8 shadow-sm"
            }
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <p className={"pb-3 text-xl font-bold"}>
                제목 <span className={"text-red-500"}>*</span>
              </p>
              <input
                placeholder="제목을 입력해주세요"
                maxLength={50}
                className="w-full rounded border border-neutral-200 p-3 focus:ring-1 focus:ring-blue-600/40 focus:outline-blue-600"
                {...register("title", { required: true, maxLength: 50 })}
              />
            </div>
            <div>
              <p className={"pb-3 text-xl font-bold"}>
                내용 <span className={"text-red-500"}>*</span>
              </p>
              <textarea
                maxLength={5000}
                rows={8}
                placeholder={"내용을 입력해 주세요"}
                className="w-full rounded border border-neutral-200 p-3 focus:ring-1 focus:ring-blue-600/40 focus:outline-blue-600"
                style={{ resize: "none" }}
                {...register("content", { required: true, maxLength: 5000 })}
              />
            </div>
            <div className={"grid grid-cols-1 gap-5 sm:grid-cols-2"}>
              <div>
                <p className={"pb-3 text-xl font-bold"}>
                  연락처 <span className={"text-red-500"}>*</span>
                </p>
                <input
                  placeholder="연락처를 입력해주세요"
                  className="w-full rounded border border-neutral-200 p-3 focus:ring-1 focus:ring-blue-600/40 focus:outline-blue-600"
                  {...register("phone", {
                    required: true,
                    pattern: /^\d{3}-\d{3,4}-\d{4}$/,
                  })}
                  onChange={handlePhoneChange}
                  value={watch("phone") || ""}
                />
              </div>
              <div>
                <p className={"pb-3 text-xl font-bold"}>
                  이메일 주소 <span className={"text-red-500"}>*</span>
                </p>
                <input
                  maxLength={30}
                  placeholder="이메일을 입력해주세요"
                  className="w-full rounded border border-neutral-200 p-3 focus:ring-1 focus:ring-blue-600/40 focus:outline-blue-600"
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    maxLength: 30,
                  })}
                />
              </div>
            </div>
            <button
              className={
                "mt-5 w-full rounded bg-blue-600 px-10 py-2 text-lg font-bold text-white"
              }
            >
              문의하기
            </button>
          </form>
        </div>
      </section>
    </APIProvider>
  );
});

export default ContactSection;
