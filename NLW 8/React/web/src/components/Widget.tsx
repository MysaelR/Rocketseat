import { ChatTeardropDots } from 'phosphor-react'

import { Popover } from '@headlessui/react'



export function Widget() {

    return (
        <Popover className='absolute bottom-4 right-4'>
            <Popover.Panel>Hello World</Popover.Panel>
            <Popover.Button className='flex bg-brand-500 text-white rounded-full px-3 h-12 items-center group'>
                <ChatTeardropDots className='w-6 h-6' />
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'> {/* o overflow-hidden faz com que qualquer coisa que sobreponha o tamanho maximo do elemento se torne invisivel */}
                    <span className='pl-2'>
                        Feedback
                    </span>
                </span>
            </Popover.Button>
        </Popover>

    );
}