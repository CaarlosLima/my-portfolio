import Image from 'next/image'

export function AboutMe() {
  return (
    <section id="about" className="flex min-h-[calc(100vh)] items-center justify-center gap-16 px-12">
      <Image src={'/photo.jpg'} alt="Profile photo" width={250} height={200} className="rounded-2xl" />

      <span className="flex flex-col gap-2 text-left">
        <h2 className="font-mono text-xl font-bold uppercase tracking-widest">About me</h2>

        <p className="text-xl font-extralight">
          Front end developer since 2021, I entered the job market in 2022. With the aim of becoming a full-stack developer, I&apos;m constantly seeking to
          learn new things and stay updated, tackling new challenges that drive my growth. <br />
          <b>As a professional, I am dedicated to turning ideas into reality, creating innovative and high-quality solutions.</b>
        </p>
      </span>
    </section>
  )
}
