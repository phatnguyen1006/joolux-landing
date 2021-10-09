/* eslint-disable no-useless-escape */
import Image from "next/image";
import { useUI } from "@contexts/ui.context";
export default function ImageView() {
    const { closeModal, imageView } = useUI();
    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-full max-h-full bg-[#fcf9f3] overflow-hidden rounded-md">
                <div className="items-center">
                    <div className="flex-shrink-0 items-center justify-center bg-gray-200 flex lg:w-[520px] xl:w-auto p-4">
                        <Image
                            src={
                                imageView || "https://i.imgur.com/j1w2lWH.jpeg"
                            }
                            alt="Thumbnail"
                            width={755}
                            height={655}
                            quality={100}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
