
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'


export default function Home() {
  return (
    <MainLayout>

      <h1>HOME Page</h1>
      
      <h1 className="title">
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.jsx</code>
      </p>
    </MainLayout>

  )
}