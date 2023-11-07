import { SettingsTabs } from "./components/SettingsTabs";
import * as Imput from "./components/Input"
import { Mail, Bold, Italic, Link, List, ListOrdered } from "lucide-react"
import * as FileInput from "../app/components/Form/FuleInput"
import { SelectComponent } from "./components/Form/Select";
import { SelectItem } from "./components/Form/Select/SelectItem";
import { Textarea } from "./components/Form/Textarea";
import { Button } from "./components/Button";



export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-980">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex flex-col lg:flex-row justify-between pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">Update your photo and personal details here.</span>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              type="button" 
              variant="outline"
            >Cancel</Button>
            <Button 
              type="submit" 
              form="settings" 
              variant="primary"
            >
              Save
            </Button>
          </div>
        </div>

        <form id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200">
          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Name</label>
            <div className="flex flex-col lg:grid gap-6 lg:grid-cols-2">
              <Imput.Root>
                <Imput.InputControl id="firstName" defaultValue='Marcos'/>
              </Imput.Root>

              <Imput.Root>
                <Imput.InputControl defaultValue='Alexandre' />
              </Imput.Root>
            </div>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email address</label>
              <Imput.Root>
                <Imput.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500"/>
                </Imput.Prefix>
                <Imput.InputControl type='email' 
                id="email" defaultValue='marcos@outlook.com'/>
              </Imput.Root>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
              Your photo
              <span className="text-sm mt-0.5 font-normal text-zinc-500 block">This will be displayed on your profile.</span>
            </label>
              <FileInput.Root id="photo" className="flex flex-col lg:flex-col lg:items-start gap-5 lg:flex-row">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">Role</label>
              <Imput.Root>
                <Imput.InputControl 
                id="role" defaultValue='Developer'/>
              </Imput.Root>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700">Country</label>
            <SelectComponent placeholder="Select a country...">
              <SelectItem value="br" text="brasil" />
            </SelectComponent>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">Timezone</label>
            <SelectComponent placeholder="Select a timezone...">
              <SelectItem value="08:00" text="Pacific Standard Time (PST) UTC−08:00" />
              <SelectItem value="09:00" text="Pacific Standard Time (PST) UTC−09:00" />
            </SelectComponent>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="text-sm mt-0.5 font-normal text-zinc-500 block">Write a short introduction.</span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col lg:grid gap-3 lg:grid-cols-2">
                <SelectComponent placeholder="" defaultValue="normal">
                  <SelectItem value="normal" defaultChecked text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </SelectComponent>

                <div className="flex items-center gap-1">

                  <Button type="button" variant="ghost">
                    <Bold className="w-4 h-4 text-zinc-500" strokeWidth={3}/>
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="w-4 h-4 text-zinc-500" strokeWidth={3}/>
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="w-4 h-4 text-zinc-500" strokeWidth={3}/>
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="w-4 h-4 text-zinc-500" strokeWidth={3}/>
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered className="w-5 h-5 text-zinc-500"/>
                  </Button>
                </div>
              </div>
              <div>

                <Textarea id="bio" defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."/>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="projects" className="text-sm font-medium text-zinc-700">
              Portifolio projects
              <span className="text-sm mt-0.5 font-normal text-zinc-500 block">Share a few snippets of your work.</span>
            </label>
            <FileInput.Root id="projects" multiple>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control/>
              </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button 
                type="button" 
                variant="outline"
            >Cancel</Button>
            <Button 
              type="submit" 
              form="settings" 
              variant="primary"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </> 
  )
}
