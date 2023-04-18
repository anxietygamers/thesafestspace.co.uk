import Head from 'next/head'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import SubHeading from '../../components/sub-heading'
import Link from 'next/link'

export default function CoCPage() {
    return ( 
        <Layout>
            <Container>
                <Header />
                    <Head>
                        <title>
                            Code of Conduct | The Safest Space
                        </title>
                    </Head>
                    <div class="w-full py-0 px-5 md:px-8 max-w-screen-lg mx-auto">
                        <SubHeading>Acknowledgements</SubHeading>
                        <div>
                            This Code of Conduct is adapted from the Community Covenant (<Link className="hover:underline" href='http://community-covenant.net'>http://community-covenant.net</Link>), version 1.0, available at <Link className="hover:underline" href='http://community-covenant.net/version/1/0/'>http://community-covenant.net/version/1/0/</Link>.
                            The Community Covenant is an open source effort and is built on codes of conduct that came before it, including the Contributor Covenant (<Link href="http://contributor-covenant.org/" className='hover:underline'>http://contributor-covenant.org/</Link>) 
                            and the LGBTQ in Tech community code of conduct (<Link href="http://lgbtq.technology/coc.html" className="hover:underline">http://lgbtq.technology/coc.html</Link>).
                        </div>
                    </div>
            </Container>
        </Layout>
    )   
}
