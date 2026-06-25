import Link from "next/link";

const navItems = [
    { href: "/about", label: "About", description: "걸어온 길과 관심사" },
    { href: "/projects", label: "Projects", description: "직접 만들고 다듬은 것들" },
    { href: "/blog", label: "Blog", description: "개발하며 남기는 기록" },
];

export default function Home() {
    return (
        <div className='flex flex-1 flex-col px-6 py-14 sm:px-10'>
            <main className='flex flex-1 flex-col justify-center'>
                <div className='mx-auto w-full max-w-xl'>
                    <header className='mb-16 sm:mb-20'>
                        <p className='font-mono text-sm tracking-wide text-accent'>Portfolio</p>
                        <h1 className='mt-3 text-4xl font-semibold tracking-tight sm:text-5xl'>koi</h1>
                        <p className='mt-4 max-w-md text-lg leading-relaxed text-muted'>
                            웹을 만드는 프론트엔드 개발자입니다. 단순하고 단단한 인터페이스를 좋아합니다.
                        </p>
                    </header>

                    <nav aria-label='주요 페이지' className='border-t border-border'>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className='group flex items-baseline justify-between gap-4 border-b border-border py-5 transition-colors hover:border-accent'
                            >
                                <span className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3'>
                                    <span className='text-xl font-medium transition-transform duration-200 group-hover:translate-x-1'>
                                        {item.label}
                                    </span>
                                    <span className='text-sm text-muted'>{item.description}</span>
                                </span>
                                <span
                                    aria-hidden
                                    className='text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent'
                                >
                                    →
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </main>

            <footer className='mx-auto w-full max-w-xl pt-12'>
                <p className='font-mono text-xs tracking-wide text-muted'>© 2026</p>
            </footer>
        </div>
    );
}
