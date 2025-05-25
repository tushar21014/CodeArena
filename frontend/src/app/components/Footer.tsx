import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0">© 2023 CodeDuel. All rights reserved.</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
