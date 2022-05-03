import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import throughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: throughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

/**
 * Object.entries(feedbackTypes) => ]=
 * 
 * [
 *  ['BUG', {...}],
 *  ['IDEA', {...}],
 *  ['OTHER', {...}]
 * ]
 * 
 */

export type FeedBackType = keyof typeof feedbackTypes; //O typeof retorna os objetos, mas com o keyof, retorna apenas as chaves (só passar o mouse em cima do "FeedBackType" para ver)


export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">


            {feedbackSent ?
                (
                    <FeedbackSuccessStep
                        onFeedbackRestartRequested={handleRestartFeedback}
                    />
                ) :
                (
                    <>
                        {!feedbackType ? (
                            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />

                        ) :
                            (
                                <FeedbackContentStep
                                    feedbackType={feedbackType}
                                    onFeedbackRestartRequested={handleRestartFeedback}
                                    onFeedbackSent={() => setFeedbackSent(true)}
                                />
                            )
                        }
                    </>
                )
            }

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div >
    )
}