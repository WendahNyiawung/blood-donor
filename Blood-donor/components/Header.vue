<template>
         <div class="lg:flex">
            <div class="flex items-center justify-center w-full px-6 py-20 lg:py-8 lg:h-128 lg:w-4/6 bg-gray-300">
                <div class="max-w-xl">
                    <h2 class="heading-text text-4xl font-semibold text-gray-800 dark:text-white lg:text-5xl">Donate <span class="text-red-600">Blood,</span> <br><span class="dark:text-indigo-400">Save a Life!</span></h2>
                        
                    <p class="mt-2 text-xl text-gray-700 dark:text-gray-400 ">
                        Blood Dornor is a digital platform for connecting Blood Donors with people in need of blood. 
                        We build strength, Stability and self reliance through shelter
                    </p>
                    <div class="mt-10 flex flex-col md:flex-row">
                        <a href="#" class="heading-text mx-2 my-2 bg-red-600 hover:bg-gray-400 px-8 py-4 rounded-md text-lg text-white hover:text-red-600 border-gray-300 hover:border-blue-800">Donate Now</a>
                        <button @click="isShow = !isShow" class="heading-text mx-2 my-2  bg-gray-500 hover:bg-gray-400 px-8 py-4 rounded-md text-lg text-white hover:text-red-600 border-gray-300 hover:border-blue-800">Search for Donors</button>
                    </div>
                    <div class="flex items-center justify-items-center" v-show="isShow">
                        <form action="">
                             <div >
                                 <input id="emailAddress" type="text" class="block px-4 py-3  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring w-96 mx-2 mt-4" placeholder="Seach for Blood Group">
                              </div>
                        </form>
                    </div>

                    
                </div>
            </div>
            <div class="flex items-center justify-center w-full px-6 py-8 lg:h-128 lg:w-2/6 bg-blue-900 invisible md:visible">
                <div class="max-w-xl">
                   <img class="object-cover w-full h-full max-w-4xl rounded-md shadow-sm -ml-20" src="/img/blood-hand.png" alt="apple watch photo">
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: false,
        }
    },
}
</script>
<style scoped>
.heading-text{
    font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
