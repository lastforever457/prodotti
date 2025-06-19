'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import engIcon from '../../../public/images/flags/eng.png'
import rusIcon from '../../../public/images/flags/rus.png'
import uzbIcon from '../../../public/images/flags/uzb.png'

const ChangeLanguage = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (locale: string) => {
    router.push(`/${locale}${pathname.slice(locale.length + 1)}`)
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-emerald-300 hover:bg-emerald-50"
        >
          <span className="mr-2">
            <Image
              src={
                locale === 'uzb'
                  ? uzbIcon
                  : locale === 'rus'
                  ? rusIcon
                  : engIcon
              }
              alt="Uzbek"
              width={20}
              className="hidden md:block"
              height={20}
            />
          </span>
          {locale === 'uzb' ? 'UZ' : locale === 'rus' ? 'RU' : 'EN'}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('uzb')}>
          <span className="mr-2">
            <Image src={uzbIcon} alt="Uzbek" width={20} height={20} />
          </span>
          O'zbek
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('rus')}>
          <span className="mr-2">
            <Image src={rusIcon} alt="Russian" width={20} height={20} />
          </span>
          Русский
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('eng')}>
          <span className="mr-2">
            <Image src={engIcon} alt="English" width={20} height={20} />
          </span>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ChangeLanguage
