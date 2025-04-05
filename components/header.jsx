import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  await checkUser();

  return (
    <header className='fixed top-0 left-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
    <nav className='w-full px-4 h-16 flex items-center justify-between '>
        <Link href="/">
            <Image src="/logo.png" alt="SensAI logo" width={200} height={60}
                className='h-12 py-1 w-auto object-contain' />
        </Link>
        <div className='flex items-center space-x-2 md:space-x-4 ml-auto'>
            <SignedIn>
                <Link href={"/sign-in"}>

                    <Button variant="outline">
                        <LayoutDashboard className='h-4 w-4'>
                            <span className='hidden md:block'>

                                Industry Insights
                            </span>
                        </LayoutDashboard>
                    </Button></Link>
         
            <DropdownMenu>
                <DropdownMenuTrigger>

                    <Button>
                        <StarsIcon className='h-4 w-4' />
                        <span className='hidden md:block'>

                            Growth Tools
                        </span>
                        <ChevronDown className='h-4 w-4' />


                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>

                    <DropdownMenuItem>
                        <Link href={"/resume"} className='flex items-center gap-2'>
                            <FileText className='h-4 w-4' />
                            <span>

                                Build Resume
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"/ai-cover-letter"} className='flex items-center gap-2'>
                            <PenBox className='h-4 w-4' />
                            <span>

                                Cover Letter
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"/interview"} className='flex items-center gap-2'>
                            <GraduationCap className='h-4 w-4' />
                            <span>

                                Interview Prep
                            </span>
                        </Link>
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
            </SignedIn>
            <SignedOut>
                <SignInButton >

                <Button variant="outline"> Sign In</Button>
                </SignInButton>
                
            </SignedOut>
            <SignedIn>
                <UserButton appearance={
                    {
elements:{
avatarBox:'w-10 h-10',
userButtonPopoverCard:'shadow-xl',
userPreviewMainIdentifier:'font-semibold',
}
                    }
                    // afterSignOutUrl="/"
                }/>
            </SignedIn>
        </div>
    </nav>


</header>
  );
}