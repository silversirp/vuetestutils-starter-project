import {shallowMount, RouterLinkStub} from '@vue/test-utils';
import GithubUser from '@/components/GithubUser.vue'

describe('GithubUser.vue', () => {
    it('renders userInfo.name', () => {
        const userInfo = {
            name : 'test',
        }
        const wrapper = shallowMount(GithubUser, {
            propsData: {
                userInfo
            },
            global: {
                stubs: {
                    'router-link':RouterLinkStub,
                }
            }
        });

        const compositionUser = wrapper.find('.user-name');

        expect(compositionUser.text()).toBe(userInfo.name);
    });
});