import styles from "@/app/homepage.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 mt-20">
      <section>
        <div className="form-wrapper">
          <Image
            src="/bg-form.svg"
            alt=""
            width={600}
            height={600}
            style={{ marginLeft: "85px" }}
          />
        </div>
        <h1 className="text-8xl px-2 mt-4 font-bold font-sans ">
          Safe and Efficient <br />
          cross-chain router
        </h1>
      </section>

      <div className={styles.imageContainer}>
        <img className={styles.image} src="/bg-main.png" alt="Background" />
        <div className={styles.overlayText}>
          <h1 className="text-7xl px-2 mt-4 font-bold font-sans text-white">
            Advanced routes <br />
            for all ecosystems
          </h1>
          <p className="text-3xl mt-6 font-bold">
            Seamlessly move tokens between <br />
            ecosystems, even if there is no direct bridge
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        style={{ marginTop: "10rem", width: "70vw", height: "80vh" }}
      >
        <div className="flex col-span-1 min-h-[180px] lg:min-h-[320px] bg-white/5 rounded-xl lg:rounded-2xl overflow-hidden flex-col lg:items-center lg:justify-center lg:justify-between lg:flex-row-reverse px-10 py-10 lg:!py-[66px] lg:col-span-3 lg:row-span-1">
          <div className="hidden lg:block">
            <Image
              src="/progress-bg.png"
              alt=""
              width={300}
              height={200}
              style={{ marginLeft: "45px" }}
            />
          </div>
          <div className="max-w-[300px] mt-6 lg:mt-0 mr-5">
            <h3 className="font-semibold !text-[28px] lg:!text-[32px] text-[18px] mb-3 lg:mb-2">
              Progress Bar
            </h3>
            <p className="text-white/40 text-[24px] max-w-[300px]">
              Track the transaction on the progress page
            </p>
          </div>
        </div>
        <div className="flex col-span-1 min-h-[180px] lg:min-h-[320px] bg-white/5 rounded-xl lg:rounded-2xl overflow-hidden flex-col lg:items-center lg:justify-center lg:justify-between lg:flex-row-reverse px-10 py-10 lg:col-span-2 lg:row-span-1 ">
          <div className="hidden lg:block">
            <Image
              src="/eth-bg.png"
              alt=""
              width={100}
              height={100}
              style={{ marginLeft: "85px" }}
            />
          </div>
          <div className="max-w-[400px] mt-6 lg:mt-0 mr-5">
            <h3 className="font-semibold !text-[28px] lg:!text-[32px] text-[18px] mb-3 lg:mb-2">
              Push Notification
            </h3>
            <p className="text-white/40 text-[24px] max-w-[300px]">
              Subscribe to browser notifications to receive transaction status
              updates
            </p>
          </div>
        </div>

        <div className="flex col-span-1 min-h-[180px] lg:min-h-[320px] bg-white/5 rounded-xl lg:rounded-2xl overflow-hidden flex-col lg:justify-between px-10 py-10 lg:col-span-1 lg:row-span-1">
          <div className="max-w-[400px] mt-6 lg:mt-0">
            <h3 className="font-semibold text-[30px] mb-3">Dynamic title</h3>
            <p className=" text-[20px]">
              Do not be afraid to go to another page and miss the second
              transaction
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
