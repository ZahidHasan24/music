import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import SongItem from '@/components/SongItem.vue';

describe('Home.vue', () => {
  it('renders list of songs', () => {
    const songs = [
      { id: 1 }, { id: 2 }, { id: 3 },
    ];

    Home.methods.getSongs = () => false;

    const component = shallowMount(Home, {
      data() {
        return {
          songs,
        };
      },
    });

    const items = component.findAllComponents(SongItem);

    expect(items).toHaveLength(songs.length);

    items.forEach((wrapper, i) => {
      expect(wrapper.props().song.id).toBe(songs[i].id);
    });
  });
});
