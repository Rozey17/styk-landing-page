/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Modal } from 'antd';
import Link from 'next/link';
import { FormattedMessage, useIntl } from 'react-intl';
import { LocaleSwitcher } from '../localeSwitcher';
import { CONSUMER_APP_URL } from '@styk-landing-app/utils';
const navItems = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

export function Navbar() {
  const { formatMessage: f } = useIntl();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="fixed z-50 top-0 w-full bg-white border border-b-1 ">
        <nav className="container flex justify-between items-center z-20">
          <div className="my-5 lg:my-6">
            <img
              src="/images/photo_2021-09-15_17-19-51.jpg"
              alt="styk logo"
              className="h-14 "
            />
          </div>

          <div className="hidden lg:block text-sm text-neutral-grayish-blue">
            <Link href="/">
              <a className="mx-3 py-5 hover:gradient-border-bottom">Home</a>
            </Link>
            {/* <Link></Link>
            <Link></Link>
            <Link></Link>
            <Link></Link> */}
            <a className="mx-3 py-5 hover:gradient-border-bottom" href="#">
              About
            </a>{' '}
            <a className="mx-3 py-5 hover:gradient-border-bottom" href="#">
              Contact
            </a>{' '}
            <a className="mx-3 py-5 hover:gradient-border-bottom" href="#">
              Blog
            </a>{' '}
            <a className="mx-3 py-5 hover:gradient-border-bottom" href="#">
              Careers
            </a>
            {/* {navItems.map((navItem) => (
              <a className="mx-3 py-5 hover:gradient-border-bottom" href="#">
                {navItem}
              </a>
            ))} */}
          </div>
          <span className="flex items-center">
            <Link href="/register">
              <a className="text-neutral-grayish-blue text-sm font-semibold mr-3">
                {/* <FormattedMessage
                  id="login"
                  defaultMessage="Login"
                  description="..."
                  // defaultMessage="Today is {ts, date, ::yyyyMMdd}"
                  // values={{ ts: Date.now() }}
                /> */}
                {/* {f({ id: 'login' })} */}
                S'enregistrer
              </a>
            </Link>
            <button
              onClick={showModal}
              // className="hidden lg:block bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-green-400"
              className="hidden lg:block bg-indigo-500 px-7 py-3 rounded-full text-neutral-white text-xs  hover:button-brightness focus:outline-none focus:ring ring-blue-400"
            >
              {f({ id: 'login' })}
            </button>
            <Modal
              title="Basic Modal"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div className="text-center uppercase font-semibold text-neutral-grayish-blue">
                <span>Vous êtes ?</span>
                <div className="my-10 flex justify-center ">
                  <button
                    onClick={() => router.push('/login')}
                    className="bg-indigo-500 px-7 py-3 rounded-full text-neutral-white text-xs  hover:button-brightness mb-7 focus:outline-none focus:ring ring-blue-400 mx-10"
                  >
                    Un candidat
                  </button>
                  <button
                    onClick={() => router.push(`${CONSUMER_APP_URL}`)}
                    className="bg-indigo-500 px-7 py-3 rounded-full text-neutral-white text-xs  hover:button-brightness mb-7 focus:outline-none focus:ring ring-blue-400 mx-10"
                  >
                    Une auto école
                  </button>
                </div>
              </div>
            </Modal>
          </span>
          <LocaleSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <img
              className={`${isOpen && 'hidden'}`}
              src="/icons/icon-hamburger.svg"
              alt=""
            />
            <img
              className={isOpen ? 'block' : 'hidden'}
              src="/icons/icon-close.svg"
              alt=""
            />
          </button>
        </nav>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-30 bg-gray-800 
      bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
          {navItems.map((navItem) => (
            <a key={navItem} className="py-2" href="#">
              {navItem}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
